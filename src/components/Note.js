import React, { Component } from 'react';
import './Note.css';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

class Note extends Component {
  render() {
    return (
      <div className="Note">
      sdfsdg
        <div className="Note-header">
        	gthvhjv
        </div>
        <div>
        	<input type="textarea" name="textValue" onChange={this.handleChange}/>
        	<TextBoxComponent multiline={true} placeholder='Enter your address' value=''/>
        </div>
      </div>
    );
  }
}

export default Note;
