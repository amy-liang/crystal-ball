import * as React from "react";
import "../App.css";
import { observable } from "mobx";
import { observer } from "mobx-react";
import CrystalBallTabs from "./CrystalBallTabs";
import GetMinimum from "./GetMinimum";
import GetReceived from "./GetReceived";
import GetPredicted from "./GetPredicted";
import CrystalBallModel from "./CrystalBallModel";

@observer
class CrystalBallTable extends React.Component {
  @observable
  crystalBallModel: CrystalBallModel = new CrystalBallModel();

  render() {
    const { currentTabIndex, setTabIndex } = this.crystalBallModel;

    return (
      <div>
        <div className="container">
          <CrystalBallTabs
            currentTabIndex={currentTabIndex}
            setTabIndex={setTabIndex}
          />
          <div className="inner-container">
            {currentTabIndex === 0 && (
              <GetMinimum crystalBallModel={this.crystalBallModel} />
            )}
            {currentTabIndex === 1 && <GetPredicted crystalBallModel={this.crystalBallModel} />}
            {currentTabIndex === 2 && <GetReceived crystalBallModel={this.crystalBallModel} />}
            {this.crystalBallModel.errorMessage && (
              <div className="error-message">
                {this.crystalBallModel.errorMessage}
              </div>
            )}
          </div>
          <div
            className="calculate-button"
            role="button"
            onClick={() => this.crystalBallModel.onCalculateClick()}
          >
            Calculate
          </div>
        </div>
        <div className="result-text">
          {this.crystalBallModel.result}
        </div>
      </div>
    );
  }
}

export default CrystalBallTable;
