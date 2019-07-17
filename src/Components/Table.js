import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

const style = {
    fontSize: '12px',
    color: 'red',
    fontStyle: 'italic',
    paddingLeft: '10px'
}

// !table's header
const TableHeader = (props) => {
    // loop through an array
    const tHeader = props.theader.map((row, i)=>{
        return(
            <th key={i}>{row}</th>
        );
    })
    
    return <thead><tr>{tHeader}</tr></thead>
}

// !table's body
const TableBody = props =>{
    const rows = props.characters.map((row, index)=>{
        // loop through an object
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className="btn btn-primary shadow-sm" onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
}

const DisplayMsg = props => {
    return(
        <span style={style}>{props.msg}</span>
    )
}


class Table extends Component {
    render() {
        const { characters, theader, msg, removeCharacter } = this.props;
        console.log(this.props);

        return (
           <div className="container my-5">
               <div className="row justify-content-center">
                   <div className="col-lg-12">
                        <table>
                            < TableHeader theader={theader} />
                            < TableBody characters={characters}  removeCharacter={removeCharacter}/>
                        </table>
                        <DisplayMsg msg={msg} />
                   </div>
               </div>
           </div>
        );
    }
}

export default Table;