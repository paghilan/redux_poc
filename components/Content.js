import React from 'react';
import ReactDOM from 'react-dom';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Content extends React.Component {
  var A = React.createClass({
    render: function(){
        return(
          <ReactCSSTransitionGroup transitionName = "example"
                     transitionAppear = {true} transitionAppearTimeout = {5000}
                     transitionEnter = {false} transitionLeave = {false} >
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
   render() {
      return (
         <div>

         </div>
      );
   }
}

export default Content;
