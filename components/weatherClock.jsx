var React = require('react');
var moment = require('moment');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            selectedTabIndex: 0,
            currentTemperature: null,
            location: null,
            time: null,
            interval: 0
        };
    },

    componentWillMount: function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            this.getCurrentLocationWeather(position.coords.longitude, position.coords.latitude);
        }.bind(this));
        this.getCurrentTime()
    },

    componentDidMount: function () {
        var interval = window.setInterval(function() {
            this.getCurrentTime();
        }.bind(this), 100);
        this.setState({interval: interval})
    },

    componentWillUnmount: function () {
        clearInterval(this.state.interval);
        this.setState({interval: 0})
    },

    getCurrentTime: function () {
        var time = moment().format("h:mm a");
        this.setState({time: time});
    },

    getCurrentLocationWeather: function (longitude, latitude) {
        var xhttp = new XMLHttpRequest;
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                var weatherResponse = JSON.parse(xhttp.response);
                var currentTemperature = weatherResponse.main.temp;
                var location = weatherResponse.name;
                this.setState({
                    currentTemperature: Math.round(currentTemperature),
                    location: location
                })
            }
        }.bind(this);

        var url = "http://api.openweathermap.org/data/2.5/weather?APPID=645c5d39c7603f17e23fcaffcea1a3c1&units=imperial" + "&lat=" + latitude + "&lon=" + longitude;
        xhttp.open("GET", url, true);

        xhttp.send();
    },

    render: function () {
        return (
            <div>
                <h1>Time is { this.state.time }</h1>
                <h1>It is currently { this.state.currentTemperature } in { this.state.location }!</h1>
            </div>
        )
    }
});