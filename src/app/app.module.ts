import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// PrimeNg Imports from here
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ChatConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, TableModule, SplitterModule,
    DividerModule,ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
