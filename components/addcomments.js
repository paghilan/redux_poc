import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddComments extends Component{
  render(){
      return (
        <div>
          <label id="addCommentLabel">Additional Comments</label> <br/>
          <textarea rows="4" cols="50" />
        </div>

      );
    }
}

export default AddComments;
