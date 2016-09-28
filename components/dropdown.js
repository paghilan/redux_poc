import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {namechanged} from '../actions/namechanged';
import {selected} from '../actions/selected';

class Position extends Component{


  render() {
  return (
      <div>
    <label >Position for </label>
    <br/><br/>
    <select selected="select" id="sel" onChange={() =>{
      var val = document.getElementById('sel').value;

      console.log("The list of skills : ",this.props.skills[val]);

      this.props.selected(this.props.skills[val].skills);
      }
    }
          className="bars" disabled={this.props.disable}>
          {this.props.skills.map((skill,i) => (
            <option key={i} value={skill.id}> {skill.position} </option> ))}
    </select><br /><br />
</div>
    );
  }

}

   function mapStateToProps(state){
     return {
        disable : state.disable,
        skills : state.skills
     };
   }

   function matchDispatchToProps(dispatch){
     console.log("DISPATCH TO PROPS ");
     return bindActionCreators({selected: selected},dispatch);
   }

   export default connect(mapStateToProps,matchDispatchToProps)(Position);
