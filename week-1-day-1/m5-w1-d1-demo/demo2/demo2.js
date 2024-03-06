// This class takes a property
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

// We are simply asking ReactDOM to create an element 
// with a property name "Westcliff"
ReactDOM.render(React.createElement(HelloMessage, 
    { name: "Westcliff" }),
    // then find "hello-example" ID to display it 
    document.getElementById('hello-example'));  