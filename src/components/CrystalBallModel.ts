import "../App.css";
import { computed, observable, action } from "mobx";

interface IInputFields {
  [key: string]: number | undefined;
}

class CrystalBallModel {
  @observable
  currentTabIndex: number = 0;
  @observable
  errorMessage: string | undefined;

  @observable
  getMinimumFields: IInputFields = {};
  @observable
  getPredictedFields: IInputFields = {};
  @observable
  getReceivedFields: IInputFields = {};

  @action
  setTabIndex = (index: number) => {
    this.currentTabIndex = index;
  };

  @action
  hasInputError = (num: number) => {
    if (num > 100 || num < 0) {
      this.errorMessage = "All inputs must be valid numbers between 0 and 100";
      return true;
    }
    return false;
  };

  @action
  clearErrorMessage = () => {
    this.errorMessage = undefined;
  };

  // GET MINIMUM

  @action
  handleMinimumInput = (field: string, value: string | undefined) => {
    this.getMinimumFields[field] = value ? parseInt(value, 10) : undefined;
  };

  @action
  getMinimum = (
    currentGrade?: number,
    futureGrade?: number,
    weight?: number
  ) => {
    if (
      !currentGrade ||
      !futureGrade ||
      !weight ||
      this.hasInputError(currentGrade) ||
      this.hasInputError(futureGrade) ||
      this.hasInputError(weight)
    ) {
      return;
    }

    const percent = weight * 0.01;
    let minimumGrade = (futureGrade - (1 - percent) * currentGrade) / percent;
    minimumGrade = Number(Math.round(minimumGrade));

    if (minimumGrade > 100) {
      this.errorMessage =
        "The result is impossible to achieve with the given input";
    } else {
      this.getMinimumFields.result = minimumGrade;
    }
  };

  // GET PREDICTED

  @action
  handlePredictedInput = (field: string, value: string | undefined) => {
    this.getPredictedFields[field] = value ? parseInt(value, 10) : undefined;
  };

  @action
  getPredicted = (
    currentGrade?: number,
    predictedGrade?: number,
    weight?: number
  ) => {
    if (
      !currentGrade ||
      !predictedGrade ||
      !weight ||
      this.hasInputError(currentGrade) ||
      this.hasInputError(predictedGrade) ||
      this.hasInputError(weight)
    ) {
      return;
    }

    const percent = weight * 0.01;
    let finalGrade = (1 - percent) * currentGrade + percent * predictedGrade;
    finalGrade = Number(Math.round(finalGrade));

    this.getPredictedFields.result = finalGrade;
  };

  // GET RECEIVED

  @action
  handleReceivedInput = (field: string, value: string | undefined) => {
    this.getReceivedFields[field] = value ? parseInt(value, 10) : undefined;
  };

  @action
  getReceived = (
    formerGrade?: number,
    finalGrade?: number,
    weight?: number
  ) => {
    if (
      !formerGrade ||
      !finalGrade ||
      !weight ||
      this.hasInputError(formerGrade) ||
      this.hasInputError(finalGrade) ||
      this.hasInputError(weight)
    ) {
      return;
    }

    const percent = weight * 0.01;

    let lowest =
      (Math.round(finalGrade) - 0.4 - (1 - percent) * formerGrade) / percent;
    let highest =
      (Math.round(finalGrade) + 0.4 - (1 - percent) * formerGrade) / percent;

    lowest = Number(Math.round(lowest));
    highest = Number(Math.round(highest));

    if (lowest < 0) {
      lowest = 0;
    }
    if (highest > 100) {
      highest = 100;
    }

    if (lowest > 100) {
      this.errorMessage =
        "Something went wrong - your grades were impossible to achieve";
    } else {
      this.getReceivedFields.lowestResult = lowest;
      this.getReceivedFields.highestResult = highest;
    }
  };

  // CALCULATE RESULT

  @action
  onCalculateClick = () => {
    this.clearErrorMessage();
    if (this.currentTabIndex === 0) {
      this.getMinimum(
        this.getMinimumFields.currentGrade,
        this.getMinimumFields.futureGrade,
        this.getMinimumFields.weight
      );
    } else if (this.currentTabIndex === 1) {
      this.getPredicted(
        this.getPredictedFields.currentGrade,
        this.getPredictedFields.predictedGrade,
        this.getPredictedFields.weight
      );
    } else if (this.currentTabIndex === 2) {
      this.getReceived(
        this.getReceivedFields.formerGrade,
        this.getReceivedFields.finalGrade,
        this.getReceivedFields.weight
      );
    }
  };

  @computed
  get result() {
    if (
      this.currentTabIndex === 0 &&
      this.getMinimumFields.result !== undefined
    ) {
      return `${this.getMinimumFields.result}%`;
    }
    if (
      this.currentTabIndex === 1 &&
      this.getPredictedFields.result !== undefined
    ) {
      // other fields
      return `${this.getPredictedFields.result}%`;
    }
    if (
      this.currentTabIndex === 2 &&
      this.getReceivedFields.lowestResult !== undefined &&
      this.getReceivedFields.highestResult !== undefined
    ) {
      return `${this.getReceivedFields.lowestResult}% - ${
        this.getReceivedFields.highestResult
      }%`;
    }
    return "";
  }
}

export default CrystalBallModel;
