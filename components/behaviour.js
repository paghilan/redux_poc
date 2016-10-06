import React from 'react';
import ReactDOM from 'react-dom';

class Behaviour extends React.Component {
  render(){
    return(
      <div>
      <table>
        <thead>
        <tr>
          <th>Behavioural Skills</th>
          <td><b>Excellent</b></td>
          <td><b>Good</b></td>
          <td><b>Average</b></td>
          <td><b>Poor</b></td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>Communication</th>
          <td hidden="true"><input defaultChecked="true" name = "communication" type = "radio" value="0"/></td>
          <td><input name = "communication" type = "radio" value="1"/></td>
          <td><input name = "communication" type = "radio" value="2"/></td>
          <td><input name = "communication" type = "radio" value="3"/></td>
          <td><input name = "communication" type = "radio" value="4"/></td>
        </tr>
        <tr>
          <th>Attitude</th>
          <td hidden="true"><input defaultChecked="true" name = "attitude" type = "radio" value="0"/></td>
          <td><input name = "attitude" type = "radio" value="1"/></td>
          <td><input name = "attitude" type = "radio" value="2"/></td>
          <td><input name = "attitude" type = "radio" value="3"/></td>
          <td><input name = "attitude" type = "radio" value="4"/></td>
        </tr>
        <tr>
          <th>Openness to Suggestion</th>
          <td hidden="true"><input defaultChecked="true" name = "openness" type = "radio" value="0"/></td>
          <td><input name = "openness" type = "radio" value="1"/></td>
          <td><input name = "openness" type = "radio" value="2"/></td>
          <td><input name = "openness" type = "radio" value="3"/></td>
          <td><input name = "openness" type = "radio" value="4"/></td>
        </tr>
        <tr>
          <th>Self Confidence</th>
          <td hidden="true"><input defaultChecked="true" name = "confidence" type = "radio" value="0"/></td>
          <td><input name = "confidence" type = "radio" value="1"/></td>
          <td><input name = "confidence" type = "radio" value="2"/></td>
          <td><input name = "confidence" type = "radio" value="3"/></td>
          <td><input name = "confidence" type = "radio" value="4"/></td>
        </tr>
        <tr>
          <th>Clarity of Thought</th>
          <td hidden="true"><input defaultChecked="true" name = "thought" type = "radio" value="0"/></td>
          <td><input name = "thought" type = "radio" value="1"/></td>
          <td><input name = "thought" type = "radio" value="2"/></td>
          <td><input name = "thought" type = "radio" value="3"/></td>
          <td><input name = "thought" type = "radio" value="4"/></td>
        </tr>
        <tr />
        <tr>
          <th>Is he/she a Mr.Cooper ?</th>
          <td><label className="switch">
            <input id="cooper" type="checkbox" />
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
