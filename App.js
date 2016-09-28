import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
import NameField from './components/namefieldcomponent';
import Position from './components/dropdown'
import SkillSet from './components/skillsetcomponent'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class App extends React.Component {
   render() {
      return (
         <div>
              <h1> FEEDBACK FORM </h1>
              <NameField />
              <Position />
              <SkillSet />

         </div>
      );
   }
}

export default App;
