import React from 'react';
import ReactDOM from 'react-dom';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Basic = React.createClass({
  getInitialState: function() {
      return{
        value: 'select'
      }
    },
  response: function() {
    var x=document.getElementById('field');
    if (x.value!="")
      document.getElementById('sel').disabled=false;
    else {
      document.getElementById('sel').disabled=true;
    }
  },

  register: function(event){
    this.setState({value: event.target.value});
    var x=event.target.value;

    switch (x)
    {
      case 'select':
              ReactDOM.render(<div> </div>,document.getElementById('fill'));
              break;
      case 'a':
              ReactDOM.render(<A />,document.getElementById('fill'));
              break;

      case 'b':
              ReactDOM.render(<B />,document.getElementById('fill'));
              break;

      case 'c':
              ReactDOM.render(<C />,document.getElementById('fill'));
              break;
      default:

    }

  },

  render: function() {
    return(
      <div>
      <label>Candidate Name</label>
      <br /><br />
       <input id="field" onChange={this.response} class="bars" type="text"/>
       <br /><br />
        <label for="exampleSelect">Position for </label>
        <br /><br />
        <select id="sel" class="bars" onChange={this.register} value={this.state.value} disabled>
           <option value="select">Select</option>
           <option value="a">Web Developer</option>
           <option value="b">ETL</option>
           <option value="c">Service Desk</option>
         </select>
         <br />
       </div>
    );
  }
});

var A = React.createClass({
  render: function(){
      return(
        <ReactCSSTransitionGroup transitionName = "example"
                   transitionAppear = {true} transitionAppearTimeout = {5000}
                   transitionEnter = {false} transitionLeave = {false}>
        <div>

        <input type="checkbox" name="HTML" /> HTML <br />

        <input type="checkbox" name="CSS" /> CSS <br />
        <input type="checkbox" name="JS" /> Javascript <br />

        </div>
        </ReactCSSTransitionGroup>
      );
  }
});

var B = React.createClass({
  render: function(){
      return(
        <ReactCSSTransitionGroup transitionName = "example"
                   transitionAppear = {true} transitionAppearTimeout = {5000}
                   transitionEnter = {false} transitionLeave = {false}>
        <div>
        <input type="checkbox" name="SQL" /> SQL <br />
        <input type="checkbox" name="MD" /> Mongo DB <br />
        </div>
        </ReactCSSTransitionGroup>
      );
  }
});

var C = React.createClass({
  render: function(){
      return(
        <ReactCSSTransitionGroup transitionName = "example"
                   transitionAppear = {true} transitionAppearTimeout = {5000}
                   transitionEnter = {false} transitionLeave = {false}>
        <div>
        <input type="checkbox" name="OP" /> Operations <br />
        <input type="checkbox" name="NW" /> Networking <br />
        </div>
        </ReactCSSTransitionGroup>
      );
  }
});


module.exports = Basic;
