import React, {Component} from 'react';
import Layout from "./Layout";

class Apa extends Component {
    render() {
        return (
            <div>
                <Layout urlData={this.props.match.params.newsID}/>
            </div>
        );
    }
}

export default Apa;