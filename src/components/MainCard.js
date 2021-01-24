import React, {Component} from 'react';

class MainCard extends Component {
    render() {
        const {image, author, date, title, description, url} = this.props
        const newDate = new Date(date)
        return (
            <div className="card cardStyle">
                <a href={url}><img className="card-img-top imageCardStyle"
                                   src={image}
                                   alt="Card image cap"/></a>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6 text-left">
                            <span className="badge badge-primary badge-pill py-1 px-3">{author}</span>
                        </div>
                        <div className="col-6 text-right text-secondary"
                             style={{fontSize: "12px"}}>
                            <p>{newDate.toDateString()}</p>
                        </div>
                    </div>
                    <a href={url}><h5 className="card-title">{title}</h5></a>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        );
    }
}

export default MainCard;