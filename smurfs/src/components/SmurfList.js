import React from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../store/action';

const SmurfList = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    };
    return(
        <div className='app'>
        <h1>Smurf List</h1>
        <h2> {props.smurf.length}</h2>
        
        <button onClick={fetchSmurf}>
          Get Smurf
        </button>
        {props.smurf.map(smurf => (
          <div className='display' >
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    smurf: state.smurf,
    error: state.error
});

export default connect(
    mapStateToProps,
    {getSmurf}
)(SmurfList);