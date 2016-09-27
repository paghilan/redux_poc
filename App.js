import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
import Basic from './components/Basic';

class App extends React.Component {
   render() {
      return (
         <div>
              <h1> FEEDBACK FORM </h1>
              <Basic />
              <span id='field'></span>
         </div>
      );
   }
}

export default App;
