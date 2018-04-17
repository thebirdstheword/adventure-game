import React, { Component } from "react";
import "./App.css";
import scenes from "./scenes.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      scene_num: 0
    };
  }

  alertSend = sendTo => {
    alert(sendTo);
  };

  nextScene = s => {
    // s.preventDefault();
    this.setState({
      scene_num: s
    });
  };

  render() {
    const divStyle = {
      backgroundImage: `url(${scenes[this.state.scene_num].image})`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      fontFamily: "Eczar",
      color: "white"
      // fontSize: "50 px",
      // textShadow:
      //   "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,x 1px 1px 0 #000"
    };
    return (
      <div className="App" style={divStyle}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Road Trip Adventure!</h1>
        </header>
        <p id="question">{scenes[this.state.scene_num].text}</p> <br />
        {/* <img src={scenes[this.state.scene_num].image} width="300" /> */}
        {scenes[this.state.scene_num].options.map((opt, i) => (
          <div key={i}>
            <button onClick={() => this.nextScene(opt.send_to)}>
              {opt.text}
            </button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
