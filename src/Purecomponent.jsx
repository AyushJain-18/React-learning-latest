import React, { PureComponent } from "react";

const FunctinalComponent = (props) => {
  console.log("Pure Funcrtioanl renders", props.name);
  return (
    <>
      <h2>Functional Pure Component:</h2>
      <div> {props.name}</div>
    </>
  );
};
const FunctionalPureComponent = React.memo(FunctinalComponent);

class ClassBasedMyPureComponent extends PureComponent {
  render() {
    console.log("PURE renders", this.props.name);
    return (
      <>
        <h2>Class Pure Component:</h2>
        <div>PURE Component {this.props.name}</div>
      </>
    );
  }
}

class ClassBasedImpureComponent extends React.Component {
  // state = { number: 1 };
  render() {
    console.log("Impure renders", this.props.name);
    return (
      <>
        <h2>Class Impure Component:</h2>
        <div> {this.props.name}</div>
      </>
    );
  }
}

const ImpurefunctinalCompoennt = (props) => {
  console.log("Impure Funcrtioanl renders", props.name);
  return (
    <>
      <h2>Functional Impure Component:</h2>
      <div> {props.name}</div>
    </>
  );
};

class ParrentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Jain" });
    }, 5000);
    setTimeout(() => {
      this.setState({ name: "Ayush" });
    }, 20000);
  }

  render() {
    //.console.log("Parrent renders", this.props.number);
    return (
      <>
        {/* <ClassBasedImpureComponent name={this.state.name} />
        <ClassBasedMyPureComponent name={this.state.name} /> */}
        <ImpurefunctinalCompoennt name={this.state.name} />
        <FunctionalPureComponent name={this.state.name} />
      </>
    );
  }
}

export default ParrentComponent;
