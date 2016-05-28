var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return { selectedTabIndex: 0 };
    },
    displayTabTitle: function(tab) {
        return (
            <li>{ tab.title }</li>
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