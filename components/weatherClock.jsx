var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return { selectedTabIndex: 0, currentTemperature: 0 };
    },
    componentWillMount: function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.getCurrentLocationWeather(position.coords.longitude, position.coords.latitude);
        }.bind(this))
    },
    getCurrentLocationWeather: function(longitude, latitude) {
        var xhttp = new XMLHttpRequest;
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4) {
                var weatherResponse = JSON.parse(xhttp.response);
                var currentTemperature = weatherResponse.main.temp;
                this.setState({ currentTemperature: currentTemperature })
            }
        }.bind(this);

        var url = "http://api.openweathermap.org/data/2.5/weather?APPID=645c5d39c7603f17e23fcaffcea1a3c1&units=imperial" + "&lat=" + latitude + "&lon=" + longitude;
        xhttp.open("GET", url, true);

        xhttp.send();
    },
    render: function() {
        return (
            <h1>It is currently { this.state.currentTemperature} in your location!</h1>
        )
    }
});