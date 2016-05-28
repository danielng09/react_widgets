var React = require('react');
var ReactDOM = require('react-dom');

var TabsComponent = require('./tabs.jsx');

var MyComponent = React.createClass({
  render: function () {
    var tabItems = [
      { title: "First Tab", content: "This is my first tab" },
      { title: "Second Tab", content: "This is my second tab" }
    ];
    return(
      <TabsComponent tabItems={ tabItems }/>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
