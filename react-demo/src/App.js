import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: 1,
    };

    this.click = this.click.bind(this);
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ update: this.state.update + 1 });
    // }, 100)
  }

  click() {
    this.setState({ update: this.state.update + 1 });
    this.setState({ update: this.state.update + 1 }, () => {
      this.setState({ update: this.state.update + 1 });
    });
  }

  render() {
    return (
      <div className="App">
        rengarxiao
        <p onClick={this.click}>
          text { this.state.update }
        </p>
      </div>
    );
  }
}

export default App;
