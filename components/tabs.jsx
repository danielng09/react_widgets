var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return { selectedTabIndex: 0 };
    },
    handleTabSwitch: function(index) {
        this.setState({ selectedTabIndex: index })
    },
    displayTabTitle: function(tab, index) {
        var tabStyle = index === this.state.selectedTabIndex ? {fontWeight: "bold"} : {};
        return (
            <li style={tabStyle} key={index} onClick={this.handleTabSwitch.bind(this, index)}>{ tab.title }</li>
        )
    },
    render: function() {
        var selectedContent = this.props.tabItems[this.state.selectedTabIndex].content;
        var tabTitles = this.props.tabItems.map(this.displayTabTitle);

        return (
            <div id="tabs">
               <ul>
                   { tabTitles }
               </ul>
               <p>{ selectedContent }</p>
            </div>
        )
    }
});