import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("https://gamesmanager-1c65e-default-rtdb.firebaseio.com/").subscribe((data: any[]) => {
      console.log(data);
      // data.forEach((item: any) => {
      //   console.log(item);
        
      //   //this.addComment(item.id, item.name, item.email, item.body);
      //   // console.log(this.items);
      // });
    });
  }
}
