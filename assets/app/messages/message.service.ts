import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();
  
  constructor(private http: Http) {}
  
  addMessage(message: Message) {
    this.messages.push(message);
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'}); // have to change the req?res? to json not ext
    return this.http.post('http://localhost:3000/message', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  // .map changes it automatically to an observable
  // .catch doesn't so you add Observable by yourself
  getMessages() {
    return this.http.get('http://localhost:3000/message')
      .map((response: Response) => {
        const messages = response.json().obj; // 'obj' is in the backend and is sent
        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
        }
        this.messages = transformedMessages; // so that transformedMessages is same as the messages
        return transformedMessages; //map needs something returned
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
  
  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }
  
  updateMessage(message: Message) {
    
  }
  
  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}