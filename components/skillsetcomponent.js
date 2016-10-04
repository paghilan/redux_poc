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
      <tbody>
      <tr>
        <th>Skillset</th>
        <td><b>1</b></td>
        <td><b>2</b></td>
        <td><b>3</b></td>
        <td><b>4</b></td>
      </tr>
      <br />
      </tbody>
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
                <td><input name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input name = {Object.keys(eachskill)[0]} type = "radio" /></td>
                <td><input name = {Object.keys(eachskill)[0]} type = "radio" /></td>
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
      selected : state.selected,
    };
  }


  export default connect(mapStateToProps)(SkillSet);
