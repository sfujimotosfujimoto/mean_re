import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements OnInit {
  message: Message;
  
  
  constructor(private messageService: MessageService) {}
  
  onSubmit(form: NgForm) {
    if (this.message) {
      //Edit
      this.message.content = form.value.content;
      
    } else {
      //Create
      const message = new Message(form.value.content, 'Jotaro');
      this.messageService.addMessage(message)
        .subscribe(
          data => console.log('this is from onSubmit',data),
          error => console.error(error)
        );
    }
    form.resetForm();
  }
  
  onClear(form: NgForm) {
    this.message = null;
    form.resetForm();
  }
  
  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    );
  }
}