import React from 'react';
import ReactDOM from 'react-dom';

class Behaviour extends React.Component {
  render(){
    return(
      <div>
      <table>
      <tbody>
        <tr>
          <th>Behavioural Skills</th>
          <th>Excellent</th>
          <th>Good</th>
          <th>Average</th>
          <th>Poor</th>
        </tr>
        <tr>
          <td>Communication</td>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
        </tr>
        <tr>
          <td>Attitude</td>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
        </tr>
        <tr>
          <td>Openness to Suggestion</td>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
        </tr>
        <tr>
          <td>Self Confidence</td>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
        </tr>
        <tr>
          <td>Clarity of Thought</td>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
        </tr>
        <br />
        <tr>
          <td>Is he/she a Mr.Cooper ?</td>
          <td><label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label></td>
        </tr>
        </tbody>
      </table>

      </div>
    );
  }
}

export default Behaviour;
