import * as React from "react";
import "../App.css";
import CrystalBallModel from "./CrystalBallModel";
import { observer } from "mobx-react";

interface IProps {
  crystalBallModel: CrystalBallModel;
}

@observer
class GetMinimum extends React.Component<IProps> {
  render() {
    const { getMinimumFields } = this.props.crystalBallModel;

    return (
      <div>
        <div className="section-header">Get Minimum from Current Grade</div>
        <div className="row">
          <div>Current Grade</div>
          <input
            type="text"
            value={getMinimumFields.currentGrade}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.props.crystalBallModel.handleMinimumInput(
                "currentGrade",
                e.currentTarget.value
              )
            }
          />
          <div>Future Grade</div>
          <input
            value={getMinimumFields.futureGrade}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.props.crystalBallModel.handleMinimumInput(
                "futureGrade",
                e.currentTarget.value
              )
            }
          />
          <div>Weight (%)</div>
          <input
            value={getMinimumFields.weight}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.props.crystalBallModel.handleMinimumInput(
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

export default GetMinimum;
