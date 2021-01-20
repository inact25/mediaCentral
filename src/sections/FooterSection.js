import React, {Component} from 'react';
import {footerWidget1, footerWidget2, footerWidget3, footerWidget4} from "../variables/SitesData";

class FooterSection extends Component {

    render() {
        // console.log(footerWidget2.item)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                        <h5>{footerWidget1.title}</h5>
                        <div dangerouslySetInnerHTML={{__html: footerWidget1.item}}/>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h5>{footerWidget2.title}</h5>
                        {footerWidget2.item.map(data =>
                            <li><a href={data.url}>{data.title}</a></li>
                        )}
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h5>{footerWidget3.title}</h5>
                        {footerWidget3.item.map(data =>
                            <li><a href={data.url}>{data.title}</a></li>
                        )}
                    </div>
                    <div className="col-12 col-md-3">
                        <h5>Sosial</h5>
                        <div className="row">
                            {footerWidget4.map(linkData =>
                                <div className="col"><a href={linkData.url}><h2
                                    className="text-white social-icon">{linkData.icon}</h2></a></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSection;