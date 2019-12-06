import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        petname: '',
        petcolor: '',
        petbreed: '',
        ownername: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }
    handleSubmit = () => {
        this.props.dispatch({ type: "ADD_PET", payload: this.state })
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
                            value={this.state.petname}
                            onChange={this.handleChange}
                            placeholder="Pet Name"
                            name="petname"
                        />
                        <input type="text"
                            value={this.state.petcolor}
                            onChange={this.handleChange}
                            placeholder="Pet Color"
                            name="petcolor"
                        />
                        <input type="text"
                            value={this.state.petbreed}
                            onChange={this.handleChange}
                            placeholder="Pet Breed"
                            name="petbreed"
                        />
                        <select onChange={this.handleChange} name="ownername">
                          <option default>Owner:</option>
                          <option>Luke</option>
                          {/* map props here later */}
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>

                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Pet</th>
                                <th>Breed</th>
                                <th>Color</th>
                                <th>Checked in</th>
                                <th>Actions</th>
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
                            <td><button 
                            onClick={()=>{
                                this.handleDelete(each.id)
                            }}></button>Check In</td>
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
export default connect(mapReduxStateToProps)(Dashboard);