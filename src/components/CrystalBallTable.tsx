import * as React from 'react';
import '../App.css';
import {action, observable} from "mobx";
import { observer } from "mobx-react";
import CrystalBallTabs from "./CrystalBallTabs";
import GetMinimum from "./GetMinimum";
import GetReceived from "./GetReceived";
import GetPredicted from "./GetPredicted";
import CrystalBallModel from "./CrystalBallModel";

@observer
class CrystalBallTable extends React.Component {
    @observable
    currentTabIndex: number = 0;

    crystalBallModel: CrystalBallModel = new CrystalBallModel();

    @action
    setTabIndex = (index: number) => {
        this.currentTabIndex = index;
    };

    render() {
        return (
            <div>
                <CrystalBallTabs
                    currentTabIndex={this.currentTabIndex}
                    setTabIndex={this.setTabIndex}
                />
                {this.currentTabIndex === 0 && <GetMinimum/>}
                {this.currentTabIndex === 1 && <GetPredicted/>}
                {this.currentTabIndex === 2 && <GetReceived/>}
            </div>
        );
    }
}

export default CrystalBallTable;