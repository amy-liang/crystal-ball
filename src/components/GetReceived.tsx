import * as React from 'react';
import '../App.css';
import CrystalBallModel from "./CrystalBallModel";
import { observer } from "mobx-react";

interface IProps {
    crystalBallModel: CrystalBallModel;
}

@observer
class GetReceived extends React.Component<IProps> {
    render() {
        const { getReceivedFields } = this.props.crystalBallModel;

        return (
            <div>
                <div className="section-header">Get Possible Grades</div>
                <div className="row">
                    <div>Former Grade</div>
                    <input
                        type="text"
                        value={getReceivedFields.formerGrade}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handleReceivedInput(
                                "formerGrade",
                                e.currentTarget.value
                            )
                        }
                    />
                    <div>Final Grade</div>
                    <input
                        value={getReceivedFields.finalGrade}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handleReceivedInput(
                                "finalGrade",
                                e.currentTarget.value
                            )
                        }
                    />
                    <div>Weight (%)</div>
                    <input
                        value={getReceivedFields.weight}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            this.props.crystalBallModel.handleReceivedInput(
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

export default GetReceived;