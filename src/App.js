import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
    isBtnClicked: false,
  };

  componentDidMount() {
    //console.log('component did mount');
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        //console.log(advice);
        this.setState({ advice, isBtnClicked: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1>Advice for Today!</h1>
          {this.state.isBtnClicked ? (
            <h1 className="heading">{advice}</h1>
          ) : (
            <p>Fetching an Advice for You...</p>
          )}
          <button className="btn" onClick={this.fetchAdvice}>
            <span>Give me Advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
