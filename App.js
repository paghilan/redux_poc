import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
import NameField from './components/namefieldcomponent';
import Position from './components/dropdown'
import SkillSet from './components/skillsetcomponent'
import AddComments from './components/addcomments'
import Submit from './components/submit'
class App extends React.Component {
   render() {
      return (
         <div>
              <h1> FEEDBACK FORM </h1>
              <NameField />
              <Position />
              <SkillSet />
              <AddComments />
              <Submit />
         </div>
      );
   }
}

export default App;
