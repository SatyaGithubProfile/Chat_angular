import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any>;

  constructor() {
    // Replace the URL with your WebSocket server URL

    this.socket$ = webSocket({ url: 'ws://localhost:3000' });
    // this.socket$ = webSocket({
    //   url: 'ws://localhost:3000',
    //   deserializer: (msg) => {
    //     try {
    //       console.log('in serviece--->', msg.data)
    //       return JSON.parse(msg.data) ;
    //     } catch (error) {
    //       console.error('Error parsing message:', error);
    //       return null;
    //     }
    //   },
    //   serializer: (msg) => JSON.stringify(msg),
    //   openObserver: {
    //     next: () => {
    //       console.log('WebSocket connection opened');
    //     },
    //     error: (error) => {
    //       console.error('WebSocket connection error:', error);
    //     },
    //   },
    // });
  }

  // Function to send a message to the WebSocket server
  sendMessage(message: any) {
    this.socket$.next(message);
  }

  // Function to listen for incoming messages from the WebSocket server
  onMessage() {
    return this.socket$.asObservable();
  }

  // Function to close the WebSocket connection
  closeConnection() {
    this.socket$.complete();
  }
}
