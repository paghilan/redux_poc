import React from 'react';
import ReactDOM from 'react-dom';
import {hired} from '../actions/hired'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Hire extends React.Component{
  render(){
    return(
      <div className="btn-group" role="group" >
          <button id="musthire" onClick={() => this.props.hired("musthire")} type="button" className="btn btn-default">Must Hire</button>
          <button id="hire"  onClick={() => this.props.hired("hire")} type="button" className="btn btn-default">Hire</button>
          <button id="reject" onClick={() => this.props.hired("reject")} type="button" className="btn btn-default">Reject</button>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({hired: hired},dispatch);
}

export default connect(null,matchDispatchToProps)(Hire);
