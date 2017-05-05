import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'React app working'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{window.cms.winMessage}</h1>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));