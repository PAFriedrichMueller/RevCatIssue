import {Component, OnInit} from '@angular/core';
import {Purchases} from "@revenuecat/purchases-capacitor";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  async ngOnInit() {
    try {
      console.log("Purchases.getCustomerInfo() called");
      let { customerInfo } = await Purchases.getCustomerInfo()
      //never reached
      console.log("info");
      console.log(customerInfo);
    } catch (e) {
      //never reached
      console.log("error");
      console.log(e);
    }
  }

}
