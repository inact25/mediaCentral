import React, {Component} from 'react';
import loading from '../assets/img/loading.gif'
import MainCard from '../components/MainCard'

class PostSection extends Component {

    render() {
        const {data, load} = this.props
        return (
            <div className="row justify-content-md-center">
                {load ?
                    <>
                        {data.map(newsData =>
                            <MainCard
                                image={newsData.urlToImage}
                                author={newsData.author}
                                date={newsData.publishedAt}
                                title={newsData.title}
                                description={newsData.description}
                                url={newsData.url}
                            />
                        )}
                    </>
                    :
                    <div className="col-md-auto">
                        <img src={loading} alt="" className="img-fluid" width="28px"/>
                    </div>
                }
            </div>
        );
    }
}

export default PostSection;