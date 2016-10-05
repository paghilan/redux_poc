import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
import NameField from './components/namefieldcomponent';
import Position from './components/dropdown';
import SkillSet from './components/skillsetcomponent';
import AddComments from './components/addcomments';
import Behaviour from './components/behaviour'
import Submit from './components/submit';
import Hire from './components/hire';

class App extends React.Component {
   render() {
      return (
         <div>
              <div id="container">
              <h1> FEEDBACK FORM </h1>
              <NameField />
              <Position />
              <SkillSet /><br />
              <Behaviour /><br />
              <AddComments /><br />
              <Hire />
              <br />
              <br />
              <Submit />
              </div>
         </div>
      );
   }
}

export default App;
