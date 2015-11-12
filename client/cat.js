'use strict';

import React from 'react';


export default React.createClass({

    componentDidMount: function () {
        console.log('mounting');

        const timerId = window.setInterval(() => this.setState({counter: this.state.counter + 1}), 1000);
        this.setState({timerId});
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    componentWillUmount: function () {
        console.log('unmounting');
    },

    render: function() {
        return (
            <div className="greeting">
                Hello, {this.props.name}! {this.state.counter}
            </div>
        );
    }
});
