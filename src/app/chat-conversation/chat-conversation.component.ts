import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.scss'
})
export class ChatConversationComponent {

  @ViewChild('myElementRif') private myScrollContainer : ElementRef = {} as ElementRef; ;

  conversations = [
    {
      "comment": 'Hi Hello',
      "type": "In",
      "timeStamp": "18:06 | July 5"
    },
    {
      "comment": 'Hi User',
      "type": "Out",
      "timeStamp": "18:07 | July 5"
    },
    {
      "comment": 'Got a doubt about something...',
      "type": "In",
      "timeStamp": "18:08 | July 5"
    },
    {
      "comment": 'Will solve your doubts, Please, Breif here...',
      "type": "Out",
      "timeStamp": "18:09 | July 5"
    },
    {
      "comment": 'Thanks for quick response...',
      "type": "In",
      "timeStamp": "18:09 | July 5"
    },

  ];


  text = '';



  addText() {
    this.websocketService.sendMessage({ text: 'Hello WebSocket Server!' });
    console.log(this.text);
    this.conversations.push(
      {
        "comment": this.text,
        "timeStamp": Date(),
        "type": "Out"
      }
    )
    this.text = '';
  }


  // Websocket connection
  message: string | undefined;
  private subscription: Subscription;

  constructor(private websocketService: WebsocketService,  elementRef : ElementRef) {
    // Subscribe to incoming messages
    this.subscription = this.websocketService.onMessage().subscribe(
      (message: any) => {
        if (message !== undefined) this.conversations.push(message);
        console.log( 'from server--->',message)
        console.log('a message came-->', this.conversations);
        this.scrollToBottom();
      },
      (error: any) => {
        console.error(error);
      }
    );
      this.scrollToBottom();
  }



  scrollToBottom(): void {
 
    try {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }, 500);
    } catch(err) { }                 
}

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    this.subscription.unsubscribe();
    // Close the WebSocket connection
    this.websocketService.closeConnection();
  }
}
