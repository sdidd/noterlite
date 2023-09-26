import React, { Component } from 'react';
import './Note.css';
import interact from 'interactjs'


const position = { x: 0, y: 0 }
interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

class Note extends Component 
{
  render() 
  {
    return (
      <div className="draggable">
        <div className="">
        	Default Note
        </div>
        <div class="resize">
        	<input type="textarea" name="textValue" onChange={this.handleChange}/>
          <textarea class="h-100 w-100" type="textarea" name="textValue" onChange={this.handleChange}
        />
        </div>
      </div>
    );
  }
}

export default Note;
