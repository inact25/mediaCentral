import React, {Component} from 'react';

import {linkList} from '../variables/NavigationLink'
import {socialLink} from '../variables/SocialLink'
import {siteDescription} from "../variables/SitesData";

class FooterSection extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                        <h5>Tentang</h5>
                        <div dangerouslySetInnerHTML={{__html: siteDescription}}>

                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h5>Link</h5>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Term of Use</a></li>
                        <li><a href="#">Hubungi kami</a></li>
                        <li><a href="#">Tentang</a></li>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h5>Kategori</h5>
                        {linkList.map(linkData =>
                            <li><a href={linkData.url}>{linkData.title}</a></li>
                        )}
                    </div>
                    <div className="col-12 col-md-3">
                        <h5>Sosial</h5>
                        <div className="row">
                            {socialLink.map(linkData =>
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