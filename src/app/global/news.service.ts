import { Injectable } from '@angular/core';
import { NewType } from './new.type';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  all_news = [
    {
      title: "Random title 1",
      description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something  ",
      date: "12/05/2021",
      image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
      category: "Deporte"
    },
    {
      title: "Random title 2",
      description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something ",
      date: "12/05/2021",
      image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
      category: "Salud"
    },
    {
      title: "Random title 3",
      description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something ",
      date: "12/05/2021",
      image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
      category: "Economía"
    },
    {
      title: "Random title 4",
      description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something ",
      date: "12/05/2021",
      image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
      category: "Tecnología"
    },
    {
      title: "Random title 5",
      description: "Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something ",
      date: "12/05/2021",
      image: "https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?strip=1",
      category: "Política"
    },
  ]

  news_types: any = {
    "Deporte": "../../assets/sports.png",
    "Salud": "../../assets/health.png",
    "Economía": "../../assets/economy.png",
    "Tecnología": "../../assets/technology.png",
    "Política": "../../assets/politic.png",
  }

  constructor() { }

  getNew(new_id: any) {
    return  this.all_news.find( ({ title }) => title === new_id );
  }
}
