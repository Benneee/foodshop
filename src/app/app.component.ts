import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodshop';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBE-G56ji4aA1BLn2l1dbH57iDf57eyrp0',
      authDomain: 'foodshop-64c5b.firebaseapp.com'
    });
  }
}
