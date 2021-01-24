import React, {Component} from 'react';
import EmptyCard from "../components/EmptyCard";
import {WidgetData} from "../variables/WidgetData";

class WidgetSection extends Component {
    render() {
        return (
            <div className="row">
                {WidgetData.map(data =>
                    <div className="col-12 my-3">
                        <EmptyCard title={data.title}>
                            {data.data}
                        </EmptyCard>
                    </div>
                )}
            </div>
        );
    }
}

export default WidgetSection;