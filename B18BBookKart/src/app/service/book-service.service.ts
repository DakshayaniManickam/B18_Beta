import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  public userId:number=527;
  constructor(private http: HttpClient) { }

  public books="https://bookcart.azurewebsites.net/api/Book";
  public cart="https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/538";
  public wishlist="https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/538"

  getTotalBooks(){
    return this.http.get(this.books);
  }

  bookDetails(id:any){
    return this.http.get(`${this.books}/${id}`)
  }

  addToCart(bookId:number){
    let header = new HttpHeaders().set(
      "Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEYWtzaGF5YW5pIE1hbmlja2FtIiwidXNlcmlkIjoiNTM4IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiOWVmZDdiZjctOTcwMC00M2I0LTg3MjgtNWYyNGRhNDJhOTJlIiwiZXhwIjoxNjQ2Nzc1NDAxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.ErroApVHbODJtjdwLOI9G3ly34WLwAQXi570iZ4BfCA"
    );
    return this.http.post(`${this.cart}/$bookId`,{headers:header})
  }

  addToWishlist(bookId:number){
    let header = new HttpHeaders().set(
      "Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEYWtzaGF5YW5pIE1hbmlja2FtIiwidXNlcmlkIjoiNTM4IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiOWVmZDdiZjctOTcwMC00M2I0LTg3MjgtNWYyNGRhNDJhOTJlIiwiZXhwIjoxNjQ2Nzc1NDAxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.ErroApVHbODJtjdwLOI9G3ly34WLwAQXi570iZ4BfCA"
    );
    return this.http.post(`${this.wishlist}/${bookId}`,{},{headers:header})
  }
}
