import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../global/news.service';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Category } from '../global/category.type';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent implements OnInit {
  myNew: any;
  newIcon: string = '../../assets/sports.png';
  new_id: any;
  subscription: Subscription = new Subscription();

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 10,
            max: 50,
            min: 0,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private route: ActivatedRoute, public newService: NewsService) {}

  ngOnInit(): void {
    Chart.defaults.global.defaultFontColor = 'white';

    this.subscription = this.route.paramMap.subscribe((params) => {
      this.new_id = params.get('new-id');
      console.log(this.new_id);
      this.recharge();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  recharge() {
    this.myNew = this.newService.getNew(this.new_id);
    let category: string = this.myNew.zCategory;
    category == 'Medicina' ? (category = 'Salud/Medicina') : null;
    this.newIcon = this.newService.news_types[category];
    this.getPercentages();
  }

  getPercentages() {
    let percentages = this.myNew.percentages;
    console.log(this.myNew);

    let index = 0;
    percentages.forEach((element: Category) => {
      let data = [0, 0, 0, 0, 0];
      data[index] = Math.round(element.concurrence_percentage);
      element.category == 'Medicina'
        ? (element.category = 'Salud/Medicina')
        : null;
      this.barChartData.push({
        data: data,
        label: element.category,
        stack: 'a',
      });
      this.barChartLabels.push(element.category);
      index++;
    });
  }
}
