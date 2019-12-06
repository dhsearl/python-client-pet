import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        pet_name: '',
        color: '',
        breed: '',
        owner_id: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }
    handleSubmit = () => {
        this.props.dispatch({ type: "ADD_PET", payload: this.state })
    }
    handleDelete = (id) =>{
        this.props.dispatch({type:'DELETE_PET', payload: id})
    }
    componentDidMount(){
        this.props.dispatch({ type: "FETCH_PETS"})
    }
    render() {
        return (
            <>
                <h2>pets</h2>
                <div className="inputField">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.petname}
                            onChange={this.handleChange}
                            placeholder="Pet Name"
                            name="pet_name"
                        />
                        <input type="text"
                            value={this.state.petcolor}
                            onChange={this.handleChange}
                            placeholder="Pet Color"
                            name="color"
                        />
                        <input type="text"
                            value={this.state.petbreed}
                            onChange={this.handleChange}
                            placeholder="Pet Breed"
                            name="breed"
                        />
                        <select onChange={this.handleChange} name="owner_id">
                          <option default>Owner</option>
                          { this.props.owners.map((owner, i) =>
                          <option value={owner.id}>
                            {owner.name}
                            </option> 
                          )}
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>

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
                            {this.props.pets[0] &&
                            this.props.pets.map((each, index) => 
                        <tr key={index}>
                            <td>{each.id}</td>
                            <td>{each.pet_name}</td>
                            <td>{each.breed}</td>
                            <td>{each.color}</td>
                            <td>{each.check_in ?
                            each.check_in :
                            "no"}</td>
                            <td><button 
                            onClick={()=>{
                                this.handleDelete(each.id)
                            }}>Delete</button>
                            <button 
                            onClick={()=>{
                                this.handleDelete(each.id)
                            }}>Check In</button>
                            </td>
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