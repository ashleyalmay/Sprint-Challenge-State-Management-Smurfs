import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../store/action";

    
    export const AddSmurf = props => {
      
      const [name, setName] = useState('');
      const [age, setAge] = useState('');
      const [height, setHeight] = useState('');
      
      const nameChange = event => {
        setName(event.target.value);
      };
      const ageChange = event => {
        setAge(event.target.value);
      };
      const heightChange = event => {
        setHeight(event.target.value);
      };
      
      const onSubmit = event => {
        console.log("something")
        event.preventDefault();
        props.postSmurf({ name, age, height });
        setName('');
        setAge('');
        setHeight('');
      };
      return (
        <form>
          <label>Name:</label>
          <input type='text' name='name' value={name} onChange={nameChange} />
          <label>Age:</label>
          <input type='text' name='age' value={age} onChange={ageChange} />
          <label>Height:</label>
          <input type="text" name='height' value={height} onChange={heightChange} />
          <button
            onClick={event => {
              event.preventDefault();
              
              onSubmit(event);
            }}
          >
            Add Here
          </button>
        </form>
      );
    };
    
    const mapStateToProps = state => {
      return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
      };
    };
    
    export default connect(mapStateToProps, { postSmurf })(AddSmurf);



