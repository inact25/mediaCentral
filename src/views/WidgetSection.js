import React, {Component} from 'react';
import WidgetPost from "../components/WidgetPost";
import {socialLink} from "../variables/SocialLink";
import {linkList} from "../variables/NavigationLink";
import {sitePartner} from "../variables/SitesData";

class WidgetSection extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://panel.niagahoster.co.id/ref/106487" target="_blank"><img
                                src="https://panel.niagahoster.co.id/banners/Set3-niagahoster-300x250.png"
                                alt="Hosting Unlimited Indonesia" border="0" width="300" height="250"
                                className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <WidgetPost/>
                </div>
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title font-weight-bold">Kategori</div>
                            <div className="row">
                                {linkList.map(linkData =>
                                    <div className="col mb-2">
                                        <a href={linkData.url}
                                           className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">{linkData.title}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <a rel="nofollow" href="https://invol.co/cl2a7lg"><img
                                src="https://img.involve.asia/rpss/campaigns_banners/50470-Qvmo1qFDnOqfIT73I6CImCeJ0RDqG9tS.jpg"
                                className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title font-weight-bold">Kerjasama</div>
                            <div className="row">
                                {sitePartner.map(partnerData =>
                                    <div className="col-6">
                                        <a href={partnerData.url}
                                           className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">{partnerData.title}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <a rel="nofollow" href="https://invol.co/cl2a7qy"><img
                                src="https://img.involve.asia/rpss/campaigns_banners/50478-RLAH8gUy5w949UV1dhvHOCz6763rrACY.jpg"
                                className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title font-weight-bold">Follow</div>
                            <div className="row">
                                {socialLink.map(linkData =>
                                    <div className="col"><a href={linkData.url}><h2 className={linkData.color}>
                                        {linkData.icon}</h2></a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WidgetSection;