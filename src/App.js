import React, { Component } from 'react';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
import { Timeline,Icon } from 'antd';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Halo world!</Button>
                <Timeline mode="alternate">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Hello World!</Timeline.Item>
                    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

export default App;