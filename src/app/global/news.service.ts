import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { NewType } from './new.type';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // {
  //   title: "Random title 1",
  //   description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something  ",
  //   date: "12/05/2021",
  //   image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
  //   category: "Deporte"
  // },

  all_news: any[] = [];

  news_types: any = {
    'Deporte': 'assets/sports.png', 
    'Salud/Medicina': 'assets/health.png',
    'Economía': 'assets/economy.png',
    'Tecnología': 'assets/technology.png',
    'Política/Gobierno': 'assets/politic.png',
  };

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  getNew(new_id: any) {
    return this.all_news.slice().find(({ headline }) => headline === new_id);
  }

  getNews() {
    return this.http.get(`${environment.back_url}/new`)
  }
}
