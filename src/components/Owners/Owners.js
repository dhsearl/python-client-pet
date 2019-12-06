import React, { Component } from 'react';
import { connect } from 'react-redux';

class Owners extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = () => {
        this.props.dispatch({ type: "ADD_OWNER", payload: this.state })
    }
    handleDelete = (owner_id) =>{
        this.props.dispatch({type:'DELETE_OWNER', payload: owner_id})
    }
    componentDidMount(){
        this.props.dispatch({ type: "FETCH_OWNER"})
    }
    render() {
        return (
            <>
                <h2>Owners</h2>
                <div className="inputField">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <button type="submit">Add Owner</button>
                    </form>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>

                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Nuumber of pets</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.owners[0] &&
                            this.props.owners.map((each, index) => 
                        <tr key={index}>
                            <td>{each.id}</td>
                            <td>{each.name}</td>
                            {/* <td>{each.pet_count}</td> */}
                            <td><button 
                            onClick={()=>{
                                this.handleDelete(each.id)
                            }}>Delete</button></td>
                        </tr>
                    )}
                        </tbody>
                    </table>
                    
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Owners);