/**
 * Created by khutaijashariff on 4/4/17.
 */
/**
 * Created by khutaijashariff on 4/4/17.
 */
import React, {Component} from 'react';
import {DatePicker, Button} from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;


class DateRangePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            date: [],
            dateString: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.setItem('dateRange', this.state.date);
        console.log(localStorage.getItem('dateRange'));

    }

    render() {
        const size = this.state.size;
        return (
            <div style={{marginTop: '20%'}}>
                <RangePicker size={size} value={this.state.date}
                             onChange={(date, dateString) => {this.setState({date: date, dateString: dateString})}}/>
                <Button type="primary" onClick={this.handleClick}>Search</Button>
            </div>
        );
    }
}

export default DateRangePicker;