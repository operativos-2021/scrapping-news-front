import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../global/news.service';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts'
import { ChartOptions, ChartType } from 'chart.js';


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

  chartOptions = {
    responsive: true,
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  chartLabels: Label[] = ["Deportes", "Salud", "Economía", "Política", "Tecnología"];
  chartData: SingleDataSet = [50, 10, 5, 15, 20];
  chartType: ChartType = 'pie';
  chartLegend = true;
  chartPlugins = [];

  constructor(
    private route: ActivatedRoute,
    public newService: NewsService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

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
