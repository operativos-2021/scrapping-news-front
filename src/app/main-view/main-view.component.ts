import { Component, OnInit } from '@angular/core';
import { NewsService } from '../global/news.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(
    public newService: NewsService
  ) { }

  ngOnInit(): void {
  }

}
