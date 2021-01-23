import React, {Component} from 'react';

class EmptyCard extends Component {
    render() {
        const {title} = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title font-weight-bold">
                        {title}
                    </div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default EmptyCard;