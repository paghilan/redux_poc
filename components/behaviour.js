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
          <td><b>Excellent</b></td>
          <td><b>Good</b></td>
          <td><b>Average</b></td>
          <td><b>Poor</b></td>
        </tr>
        <br />
        <tr>
          <th>Communication</th>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
          <td><input name = "communication" type = "radio" /></td>
        </tr>
        <tr>
          <th>Attitude</th>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
          <td><input name = "attitude" type = "radio" /></td>
        </tr>
        <tr>
          <th>Openness to Suggestion</th>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
          <td><input name = "openness" type = "radio" /></td>
        </tr>
        <tr>
          <th>Self Confidence</th>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
          <td><input name = "confidence" type = "radio" /></td>
        </tr>
        <tr>
          <th>Clarity of Thought</th>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
          <td><input name = "thought" type = "radio" /></td>
        </tr>
        <br />
        <tr>
          <th>Is he/she a Mr.Cooper ?</th>
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
