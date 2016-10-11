import React from 'react';
import ReactDOM from 'react-dom';

class Hire extends React.Component{
  handleClick()
  {
    //set state or props ??
    return null;
  }
  render(){
    return(
      <div className="btn-group" role="group" >
          <button onClick={this.handleClick} type="button" className="btn btn-default">Must Hire</button>
          <button onClick={this.handleClick} type="button" className="btn btn-default">Hire</button>
          <button onClick={this.handleClick} type="button" className="btn btn-default">Reject</button>
      </div>
    );
  }
}

export default Hire;
