import React, { Component } from 'react';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Halo world!</Button>
            </div>
        );
    }
}

export default App;