import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post =[
    {
      title: "Samsung Galaxy S8",
      imageUrl: "../assets/product2.jpg",
      username: "Mike",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
     {
      title: "Samsung Galaxy S12",
      imageUrl: "../assets/product3.jpeg",
      username: "Dennis",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
      {
      title: "Samsung Galaxy 20",
      imageUrl: "../assets/product4.png",
      username: "Ola",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
        {
      title: "iPhone 12 Promax",
      imageUrl: "../assets/iphone12pro.jpg",
      username: "James",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
                    {
      title: "iPhone 12 Promax",
      imageUrl: "../assets/iphone12pro.jpg",
      username: "James",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    
  ]
}
