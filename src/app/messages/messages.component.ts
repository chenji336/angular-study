import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 官网是说要写成public，html中才能调用（这里改成private也没影响）
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
