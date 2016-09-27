import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {namechanged} from '../actions/namechanged'

class NameField extends Component{
  render() {
    return(
      <div>
      <label>Candidate Name</label>
      <br /><br />
      <input id="field" onChange={() => this.props.namechanged(document.getElementById('field').value)}  type="text"/>
      <br /><br />
         <br />
       </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  console.log("Hello Entered Match");
  return bindActionCreators({namechanged: namechanged},dispatch);
}

export default connect(null,matchDispatchToProps)(NameField);
