import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare global {
  interface Window {
    watsonAssistantChatOptions:any;
  }}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.router.navigate(['/home'])){

      window.watsonAssistantChatOptions = {
        integrationID: "ea2a7c55-24ab-42e6-a051-444b61073067", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "9ff9851e-51c5-41c4-82e5-f7523dbdf7b5", // The ID of your service instance.
        onLoad: function(instance:any) { instance.render(); }
      };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
      
   }
  }
}




