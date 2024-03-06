class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  // Adds 1 second to the timer using the interval of 1000
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Rendering without JSX 
  render() {
    return React.createElement(
      'div',
      null,
      'Seconds: ',
      this.state.seconds
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));