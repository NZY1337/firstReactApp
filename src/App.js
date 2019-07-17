import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/Table';
import Table from './Components/Table';
// import MyFirstComponent from './Components/MyFirstComponent';


// !everything loads in the App.js Component (all components loads here)
// ?App js is the parent of all components in React.JS

class App extends Component {
    state = {
        divStyle : {
            marginBottom: '0px',
            marginTop: '5px',
            cursor: 'pointer'
        },
        
        tableDataHeader : ['Name', 'Job'],

        tableData: [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspring actress'
            }, 
            {
                name: 'Dennis',
                job: 'Bartender'
            }
        ],

        sortByName: 'Footer Default',
        sortByClick: ''
    }
    
    sortClickFunction = () => {
        this.setState({
            sortByClick: 'Sorted by click'
        })
    }

    compare(key)  {
        const { tableData } = this.state
        this.setState({
            tableData: tableData.sort((a, b)=>{
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            })
        });
    }
    
    removeCharacter = index => {
        const { tableData } = this.state
        
        this.setState({
            tableData: tableData.filter((character, i) => {
            
            return i !== index
            })
        })
    }
    
    render() {
        const { tableData, sortByName, tableDataHeader, divStyle } = this.state;
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p style={divStyle} onClick={() => this.compare('name')}>Sort Name</p>
                            <p style={divStyle} onClick={() => this.compare('job')}>Sort Job</p>
                        </div>
                    </div>
                </div>
            
                <Table
                    // msg={sortByName} 
                    characters={tableData} 
                    theader={tableDataHeader}
                    removeCharacter={this.removeCharacter}
                />


                {/* <MyFirstComponent /> */}
            </div>
        );
    }
} 

export default App;
