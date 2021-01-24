import React from 'react';
import {navigationLink} from "./NavigationLink";
import {sitePartner} from "./SitesData";
import {socialLink} from "./SocialLink";
import WidgetPost from "../sections/WidgetPost";

const Ads1 = () => {
    return (
        <a href="https://panel.niagahoster.co.id/ref/106487" target="_blank"><img
            src="https://panel.niagahoster.co.id/banners/Set3-niagahoster-300x250.png"
            alt="Hosting Unlimited Indonesia" border="0" width="300" height="250"
            className="img-fluid"/></a>
    );
};


const Ads2 = () => {
    return (
        <a rel="nofollow" href="https://invol.co/cl2a7lg"><img
            src="https://img.involve.asia/rpss/campaigns_banners/50470-Qvmo1qFDnOqfIT73I6CImCeJ0RDqG9tS.jpg"
            className="img-fluid"/></a>
    );
};

const Ads3 = () => {
    return (
        <a rel="nofollow" href="https://invol.co/cl2a7qy"><img
            src="https://img.involve.asia/rpss/campaigns_banners/50478-RLAH8gUy5w949UV1dhvHOCz6763rrACY.jpg"
            className="img-fluid"/></a>
    );
};

const Category = () => {
    return (
        <div className="row">
            {navigationLink.map(linkData =>
                <div className="col mb-2">
                    <a href={linkData.url}
                       className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">{linkData.title}
                    </a>
                </div>
            )}
        </div>
    )
};

const Partner = () => {
    return (
        <div className="row">
            {sitePartner.map(partnerData =>
                <div className="col-6">
                    <a href={partnerData.url}
                       className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">{partnerData.title}
                    </a>
                </div>
            )}
        </div>
    )
};

const Social = () => {
    return (
        <div className="row">
            {socialLink.map(linkData =>
                <div className="col"><a href={linkData.url}><h2 className={linkData.color}>
                    {linkData.icon}</h2></a>
                </div>
            )}
        </div>
    )
};

export const WidgetData = [{
    title: "",
    data: <Ads1/>
}, {
    title: "Bisnis hari ini",
    data: <WidgetPost/>
}, {
    title: "Kategori",
    data: <Category/>
}, {
    title: "",
    data: <Ads2/>
}, {
    title: "Kerjasama",
    data: <Partner/>
}, {
    title: "",
    data: <Ads3/>
}, {
    title: "Social",
    data: <Social/>
},
]
