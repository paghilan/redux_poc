import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selected} from '../actions/selected';
import JQuery from 'jquery'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class SkillSet extends Component{
  render(){
    return(
      <div>
      <script src="jquery.range.js"></script>
      <ReactCSSTransitionGroup transitionName = "example"
              transitionAppear = {true} transitionAppearTimeout = {5000}
              transitionEnter = {false} transitionLeave = {false}>

        {this.props.selected.map((eachskill,i) => (
          <div  key={"check"+i} >
                <label>{Object.keys(eachskill)[0]}</label>
                <select id="grade" defaultValue = {eachskill[Object.keys(eachskill)[0]]}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
          </div>
          )
        )}
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
