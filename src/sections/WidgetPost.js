import React, {Component} from 'react';
import Swal from 'sweetalert2'
import {getNews} from "../services/apis/newsApi";
import loading from '../assets/img/loading.gif'

class WidgetPost extends Component {

    state = {
        newsData: [],
        isLoaded: false
    }

    businessToday = () => {
        getNews("business")
            .then((res) => {
                this.setState({
                    newsData: res.articles,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        this.businessToday()
    }

    render() {
        const data = this.state.newsData
        return (
            <>
                {this.state.isLoaded ?
                    <div className="row">
                        {data.map(businessData =>
                            <div className="col-12 px-4 pb-4 ">
                                <div>
                                    <a href={businessData.url}><img src={businessData.urlToImage} alt=""
                                                                    className="img-fluid widgetPostImage"/></a>
                                </div>
                                <div className="pt-3">
                                    <a href={businessData.url}><p
                                        className="font-weight-bold">{businessData.title}</p></a>
                                </div>
                                <hr/>
                            </div>
                        )}

                    </div>
                    :
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <img src={loading} alt="" className="img-fluid" width="28px"/>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default WidgetPost;