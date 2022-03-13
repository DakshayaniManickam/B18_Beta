import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public particularBook:any = [];
  public bookId:any = [];

  constructor(private serv:BookServiceService,private route: ActivatedRoute) { 
    this.bookId = this.route.snapshot.paramMap.get('id');
    }
  public userId=527;
  public addedtowishlist:boolean=false;

  ngOnInit(): void {
    this.bookDetails(this.bookId)
  }
  bookDetails(id:any){
    this.serv.bookDetails(id).subscribe((res=>{
      this.particularBook=res;      
    }))
  }
  addToCart(){
    this.serv.addToCart(this.bookId).subscribe((res=>{
      alert("added to cart");
    }))
  }
addToWishlist(id:any){
  this.serv.addToWishlist(id).subscribe((res=>{
    let response:any=res
    console.log(response)
    if(response.length!==0){
      alert("Added to Wishlist")
    }
    else if(response.length===0)
    {
      alert("removed from Wishlist")
    }
  }))
  this.addedtowishlist=!this.addedtowishlist;
}

}
