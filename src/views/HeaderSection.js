import React, {Component} from 'react';
import {siteTitle} from "../variables/SitesData";

class HeaderSection extends Component {
    render() {
        return (
            <div className="py-5 bg-dark text-center topHead">
                <h1 className="site-title align-middle">{siteTitle}</h1>
            </div>
        );
    }
}

export default HeaderSection;