import * as React from 'react';
import '../App.css';
import CrystalBallModel from "./CrystalBallModel";
import { observer } from "mobx-react";

interface IProps {
    crystalBallModel: CrystalBallModel;
}

@observer
class GetPredicted extends React.Component<IProps> {
    render() {
        const { getPredictedFields } = this.props.crystalBallModel;

        return (
            <div>
                <div className="section-header">Get Final from Predicted Grade</div>
                <div className="row">
                    <div>Current Grade</div>
                    <input
                        type="text"
                        value={getPredictedFields.currentGrade}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handlePredictedInput(
                                "currentGrade",
                                e.currentTarget.value
                            )
                        }
                    />
                    <div>Predicted Grade</div>
                    <input
                        value={getPredictedFields.futureGrade}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handlePredictedInput(
                                "predictedGrade",
                                e.currentTarget.value
                            )
                        }
                    />
                    <div>Weight (%)</div>
                    <input
                        value={getPredictedFields.weight}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handlePredictedInput(
                                "weight",
                                e.currentTarget.value
                            )
                        }
                    />
                </div>
            </div>
        );
    }
}

export default GetPredicted;