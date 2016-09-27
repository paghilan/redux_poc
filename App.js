import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
import NameField from './components/namefieldcomponent';
import Position from './components/dropdown'

class App extends React.Component {
   render() {
      return (
         <div>
              <h1> FEEDBACK FORM </h1>
              <NameField />
              <Position />
              <span id='fill'></span>
         </div>
      );
   }
}

export default App;
