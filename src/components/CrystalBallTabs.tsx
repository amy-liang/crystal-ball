import * as React from 'react';
import '../App.css';
import {action, observable} from "mobx";
import { observer } from "mobx-react";

interface IProps {
    currentTabIndex: number;
    setTabIndex: (index: number) => void;
}

@observer
class CrystalBallTabs extends React.Component<IProps> {

    render() {
        const { currentTabIndex, setTabIndex } = this.props;

        return (
            <div className="tab-container">
            <div className={currentTabIndex === 0 ? 'tab active-tab' : 'tab'} onClick={() => setTabIndex(0)}>
                Get Minimum
            </div>
                <div className={currentTabIndex === 1 ? 'tab active-tab' : 'tab'} onClick={() => setTabIndex(1)}>
                    Get Predicted
                </div>
                <div className={currentTabIndex === 2 ? 'tab active-tab' : 'tab'} onClick={() => setTabIndex(2)}>
                    Get Received
                </div>
            </div>
        );
    }
}

export default CrystalBallTabs;