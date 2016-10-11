import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selected} from '../actions/selected';

class Submit extends Component{

  submitClicked(){
    var candidateName = document.getElementById("field").value;
    console.log("Submit clicked", candidateName);

    var request = {"candidate_name" : candidateName};

    var position = document.getElementById("sel").value;
    console.log("Position Selected ", this.props.skills[position].position);

    request.position =  this.props.skills[position].position;

    var skillSet = {};
    this.props.selected.map((eachskill) => {
      var skillName = Object.keys(eachskill)[0];
      var skillValue = document.querySelector('input[name=\"'+skillName+'\"]:checked').value;

      skillSet[skillName] = skillValue;
    });
    request.skill = skillSet;

    var behavior = {};
    var communication = document.querySelector('input[name="communication"]:checked').value
    var attitude = document.querySelector('input[name="attitude"]:checked').value;
    var openness = document.querySelector('input[name="openness"]:checked').value
    var confidence = document.querySelector('input[name="confidence"]:checked').value;
    var thought = document.querySelector('input[name="thought"]:checked').value;

    console.log("Radio communication Selected", communication);
    console.log("Radio Attitude Selected",attitude);
    console.log("Radio Openness Selected",openness);
    console.log("Radio Confidence Selected",confidence);
    console.log("Radio Thought Selected",thought);

    behavior["communication"] = communication;
    behavior["attitude"] = attitude;
    behavior["openness"] = openness;
    behavior["confidence"] = confidence;
    behavior["thought"] = thought;

    request.behavior = behavior;


    var addComment = document.getElementById("addcomments").value;
    request.additional = addComment;

    console.log("Request Body",request);

  }
  render(){
    console.log("Youuu",this.props.skills);
    return (
<<<<<<< HEAD
      <div>
      <input className="btn btn-highlight" type="submit" onClick={this.submitClicked.bind(this)} /> </div>
=======
      <div id="sub">
      <input  className="btn btn-highlight" type="submit" /> </div>
>>>>>>> 8924d019736045023e9687e9588d42e7ae64bbf3
    );
  }
}

function mapStateToProps(state){
  return {
    skills : state.skills,
    selected : state.selected
  };
}
export default connect(mapStateToProps)(Submit);
