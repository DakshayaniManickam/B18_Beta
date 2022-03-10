import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public allBooks: any = [];
  public allBookkk: any = [];
  constructor(private serv: BookServiceService) { }

  ngOnInit(): void {
    this.getTotalBooks();
  }
  getTotalBooks() {
    this.serv.getTotalBooks().subscribe((res) =>{
      this.allBooks = res;
      this.allBookkk = res;
    });
  }


}
