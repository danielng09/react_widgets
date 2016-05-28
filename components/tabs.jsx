var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return { selectedTabIndex: 0 };
    },
    displayTabTitle: function(tab, index) {
        var tabStyle = index === 0 ? {fontWeight: "bold"} : {};
        return (
            <li style={tabStyle}>{ tab.title }</li>
        )
    },
    render: function() {
        return (
           <ul>
               {this.props.tabItems.map(this.displayTabTitle)}
           </ul>
        )
    }
});