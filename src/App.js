import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    buttonText: "Give Me Advice",
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    this.setState({ buttonText: "Loading..." });

    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice, buttonText: "Give Me Advice" });
      })
      .catch((error) => {
        this.setState({ buttonText: "Error.." });
      });
  };

  render() {
    const { advice, buttonText } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={(this, this.fetchAdvice)}>
            <span> {buttonText}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
