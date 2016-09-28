import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selected} from '../actions/selected';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class SkillSet extends Component{
  render(){
    return(
      <div>
      <ReactCSSTransitionGroup transitionName = "example"
              transitionAppear = {true} transitionAppearTimeout = {5000}
              transitionEnter = {false} transitionLeave = {false}>

        {this.props.selected.map((eachskill) => (
          <div>
                <input type="checkbox" />{eachskill} <br />
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
