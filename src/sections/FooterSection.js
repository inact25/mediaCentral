import React, {Component} from 'react';
import {FooterData} from "../variables/FooterData";

class FooterSection extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {FooterData.map(data =>
                        <div className="col-12 col-md-3 mb-3">
                            <h5>{data.title}</h5>
                            {data.item}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FooterSection;