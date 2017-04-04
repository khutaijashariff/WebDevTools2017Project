import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import DateRangePicker from './DateRangePicker';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Primary</Button>
                <DateRangePicker />
            </div>
        );
    }
}
export default App;
