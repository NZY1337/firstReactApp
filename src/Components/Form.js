import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
        }
        
        this.state = this.initialState;
    }
    
    
    handleChange = event => {
        const {name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render() {
        const {name, job} = this.state;
        console.log(this.state);
        alert(this.state.lol)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form action="">
                            <label htmlFor="">Name</label>
                            <input className="d-block p-2"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="">Job</label>
                            <input 
                                className="d-block p-2"
                                type="text"
                                name="job"
                                value={job}
                                onChange={this.handleChange}
                            />

                            <input type="button" className="btn btn-danger mt-3" value="Submit" onClick={this.submitForm} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Form;