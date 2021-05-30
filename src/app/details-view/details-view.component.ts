import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../global/news.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  myNew: any;
  newIcon: string = "../../assets/sports.png";
  new_id: any;
  subscription: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    public newService: NewsService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.new_id = params.get("new-id");
      console.log(this.new_id)
      this.recharge();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  recharge(){
    this.myNew = this.newService.getNew(this.new_id)
    let category: string = this.myNew.category
    this.newIcon = this.newService.news_types[category]
    console.log(category, this.newIcon)
  }

}
