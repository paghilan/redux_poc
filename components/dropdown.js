import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {namechanged} from '../actions/namechanged'


class Position extends Component{

  render() {
    return (
      <div>
    <label >Position for </label>
    <br/><br/>
    <select onChange={() => this.props.selected(document.getElementById('sel').value)} id="sel" className="bars" disabled={this.props.disable}>
      <option value="select">Select</option>
      <option value="a">Web Developer</option>
      <option value="b">ETL</option>
      <option value="c">Service Desk</option>
    </select>
    </div>
    );
  }
}

   function mapStateToProps(state){
     return {
        disable : state.disable
     };
   }



   export default connect(mapStateToProps)(Position);
