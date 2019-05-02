import * as React from 'react';
import '../App.css';
import CrystalBallModel from "./CrystalBallModel";

interface IProps {
    crystalBallModel: CrystalBallModel;
}

class GetMinimum extends React.Component<IProps> {

    render() {
        return (
            <div>
                <div className="section-header">Get Minimum from Current Grade</div>
                <div className="row">
                <div>Current Grade</div>
                    <input type="text" value={this.props.crystalBallModel.currentGrade} onKeyPress={(event: any) => this.props.crystalBallModel.handleInput("currentGrade", event.value)}/>
                <div>Future Grade</div>
                    <input type="text" value={this.props.crystalBallModel.futureGrade}/>
                <div>Weight (%)</div>
                    <input type="text" value={this.props.crystalBallModel.weight}/>
                </div>
            </div>
        );
    }
}

export default GetMinimum;