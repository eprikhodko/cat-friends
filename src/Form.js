import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form className="form">
                <input 
                    type="text" 
                    value={this.state.name}
                    name="name" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                />

                <input 
                    type="email"
                    value={this.state.email} 
                    name="email" 
                    placeholder="email" 
                    onChange={this.handleChange} 
                />
                <h2>{this.state.name} {this.state.email}</h2>
            </form>
        )
    }
}

export default Form