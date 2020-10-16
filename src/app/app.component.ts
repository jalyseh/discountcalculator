import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title= "Handy Dandy Discount Calculator";
  discountAmount= 0;
  finalPrice=0;

  calculate(price,discount){
    this.discountAmount = (discount / 100) * price;
    this.finalPrice = price - this.discountAmount;
    return this.finalPrice;
  }
}
