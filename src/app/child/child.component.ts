import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  /**
   * Event emitter that outputs a string value.
   * This event can be used to communicate from the child component to the parent component.
   * 
   * @output
   */
  @Output() childEvent = new EventEmitter<string>();

  test(){
    this.childEvent.emit('Hello from child');
  }

}
