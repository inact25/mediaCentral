import React, {Component} from 'react';
import WidgetPost from "../components/WidgetPost";
import {socialLink} from "../variables/SocialLink";

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
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Bisnis
                                    </button>
                                </div>
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Selebritas
                                    </button>
                                </div>
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Kesehatan
                                    </button>
                                </div>
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Sains
                                    </button>
                                </div>
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Olahraga
                                    </button>
                                </div>
                                <div className="col mb-2">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Teknologi
                                    </button>
                                </div>
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
                                <div className="col-6">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Idcsharp.com
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn-sm btn-block btn btn-outline-primary rounded-pill text-center font-weight-light">Javapixa.com
                                    </button>
                                </div>
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