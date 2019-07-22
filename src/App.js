import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/Table';
import Table from './Components/Table';
import Form from './Components/Form';

// import MyFirstComponent from './Components/MyFirstComponent';


// !everything loads in the App.js Component (all components loads here)
// ?App js is the parent of all components in React.JS

class App extends Component {
    state = {
        characters: [],
        divStyle : {
            marginBottom: '0px',
            marginTop: '5px',
            cursor: 'pointer'
        },

        tableDataHeader : ['Name', 'Job'],
        getTrue: false,
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

        sortByName: 'Sorted By Name',
        sortByJob: 'Sorted By Job'
    }

    sortData(key)  {
        const { tableData, getTrue } = this.state

        this.setState({
            getTrue: true,

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
    
    handleSubmit = character => {
        this.setState({character: [...this.state.characters, character]})
    }
    
    render() {
        const { tableData, sortByName, sortByJob, tableDataHeader, divStyle, getTrue, getFals } = this.state;
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                    
                        <div className="col-lg-12">
                            <p style={divStyle} onClick={() => this.sortData('name')}>Sort Name</p>
                            <p style={divStyle} onClick={() => this.sortData('job')}>Sort Job</p>

                            <Table
                                characters={tableData} 
                                theader={tableDataHeader}
                                removeCharacter={this.removeCharacter}
                            />

                            {getTrue ? sortByJob : ''} 
                             
                        </div>

                        <Form handleSubmit={this.handleSubmit}/>

                        {/* <MyFirstComponent /> */}
                    </div>
                </div>
                
               
            </div>
        );
    }
} 

export default App;
