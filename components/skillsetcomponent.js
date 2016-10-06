import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selected} from '../actions/selected';
import JQuery from 'jquery'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Mini extends Component{
  render(){
    return(
      <div>
      <table>
      <thead>
      <tr>
        <th>Skillset</th>
        <td><b>1</b></td>
        <td><b>2</b></td>
        <td><b>3</b></td>
        <td><b>4</b></td>
      </tr>
      </thead>
      </table>
      </div>
    );
  }
}

class SkillSet extends Component{
  render(){
    return(
      <div>
      {this.props.selected.length > 0 ? <Mini /> : null}


      <ReactCSSTransitionGroup transitionName = "example"
              transitionAppear = {true} transitionAppearTimeout = {5000}
              transitionEnter = {false} transitionLeave = {false}>


          <table>
          <tbody>
          {this.props.selected.map((eachskill,i) => (
          <tr key={"skill"+i}>
                <th>{Object.keys(eachskill)[0]}</th>
                <td hidden = "true"><input value="0" name={Object.keys(eachskill)[0]} defaultChecked="true" type= "radio"/></td>
                <td><input value="1" name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input value="2" name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input value="3" name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input value="4" name = {Object.keys(eachskill)[0]} type = "radio" /></td>
          </tr>
          )
        )}
        </tbody>
        </table>
        </ReactCSSTransitionGroup>
      </div>
  );
  }
  }

  function mapStateToProps(state){
    return {
      selected : state.selected
    };
  }


  export default connect(mapStateToProps)(SkillSet);
