
import '../App.css';
import { observable, action } from 'mobx';

class CrystalBallModel {
    @observable
    inputError: boolean = false;
    @observable
    invalidResultError: boolean = false;
    @observable
    currentGrade: string | undefined;
    @observable
    futureGrade: string | undefined;
    @observable
    weight: string | undefined;
    @observable
    inputFields: any = {};

    @action
    handleInput = (field: string, value: string | undefined) => {
        this.inputFields[field] = value;
    };

    @action
    hasInputError = (num: number) => {
        if (num > 100 || num < 0) {
            this.inputError = true;
            return true;
        }
        return false;
    };

    @action
    clearErrors = () => {
        this.inputError = false;
        this.invalidResultError = false;
    };

    @action
    getMinimum = (currentGrade: number, futureGrade: number, weight: number) => {
        if (this.hasInputError(currentGrade) ||
            this.hasInputError(futureGrade) ||
            this.hasInputError(weight)) {
            return;
        }

        const percent = weight * 0.01;
        let minimumGrade = ( futureGrade - ((1 - percent) * currentGrade) ) / percent;
        minimumGrade = Number(Math.round(minimumGrade));

        if ( minimumGrade > 100 ) {
            this.invalidResultError = true;
        } else {
            return minimumGrade;
        }
    }
}

export default CrystalBallModel;