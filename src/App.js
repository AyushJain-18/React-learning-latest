import React from "react";
import ParrentComponent from "./Purecomponent";
import MemoizedFunctionResult from "./useMemo";
import ButtonContainer from "./useCallback";
import { MemoizedButton, ButtonComponent } from "./ButtonComponent";
import FetchDataContainer, {
  ComponentToConsumeProviderValue,
} from "./FunctionalComponent";
import { Provider } from "./context";
import FileUpload from "./FileUploader";
import LightDarkTooglerApp from "./theme/LightDarkToogler";

class App extends React.Component {
  state = { number: 1 };
  handleSubmit = () => {};
  updateName = () => {
    this.setState({ name: "Ayush" });
  };
  incrementNumber = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };
  render() {
    console.log("App renders", this.state.number);

    const value = {
      number: this.state.number,
      incrementNumber: this.incrementNumber,
    };
    return (
      <>
        <button onClick={this.incrementNumber}>
          {" "}
          Inc {this.state.number}{" "}
        </button>
        <button onClick={this.updateName}>Update Name</button>

        <LightDarkTooglerApp />

        {/* <FileUpload></FileUpload> */}

        {/* Fetch Conatiner contains HOC and useFetch custum hooks */}
        {/* <Provider value={value}>
          <ComponentToConsumeProviderValue />
        </Provider> */}

        {/* for testing pure component */}
        {/* <ParrentComponent /> */}

        {/* for testing for memoized function result */}
        {/* <MemoizedFunctionResult number={this.state.number} /> */}

        {/* _________________________Use callback example_____________________ _____________________________*/}
        {/* for testing for callback function which memoized function itself */}

        {/* this is without memoized and will render after evry state update on APP*/}
        {/* <ButtonComponent submit={this.handleSubmit} /> */}

        {/* this is class based Pure Component, and will run only when React is trully updated*/}
        {/* <MemoizedButton submit={this.handleSubmit} /> */}

        {/* Functional component,it will demonstrate acctual use of useCallback*/}
        {/* <ButtonContainer number={this.state.number} /> */}

        {/* ____________________________END of useCallback_________________________________________________ */}
      </>
    );
  }
}

export default App;
