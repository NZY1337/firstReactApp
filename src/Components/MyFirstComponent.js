import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Items from '../Components/Items';
import PassDataFromCompToComp from '../Components/PassDataFromCompToComp';


class MyFirstComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'MyFirstComponent',
            count: 0
        }
        
        this.clickFunc = () => {
            this.setState({count: this.state.count+= 1 })
        }
    }
    
    render() {
        return(
            <div className="my-first-com container bg-dark d-none text-center py-4 text-white">
                <h1>My First Component</h1>
                <p>lorem ipsum</p>
                <Items/>
                <Button variant="warning" className="text-danger">Warning</Button>
                <Items items={['man', 'female', 3]}/>

                <PassDataFromCompToComp name={this.state.name}/>

                <button onClick={this.clickFunc} className="btn btn-primary">Warning</button>
                <p>count: {this.state.count}</p>
            </div>
        )
    }
}


export default MyFirstComponent;

