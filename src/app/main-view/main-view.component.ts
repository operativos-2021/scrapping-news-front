import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { NewsService } from '../global/news.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  loading = false

  constructor(
    public newService: NewsService,
    private globalService: GlobalService
  ) { }

  async ngOnInit() {
    if (this.newService.all_news.length == 0){
      this.loading = true
      await this.globalService.startUpServer().toPromise().then(
        (data: any) => {
          this.newService.getNews().subscribe({
            next: (data: any) => {
              let pages = data.data;
              if (pages.Amelia) 
                pages.Amelia.forEach(((element: any) => {
                  this.newService.all_news.push(element)
                }))
              
              
              if(pages.undo)
                pages.Mundo.forEach(((element: any) => {
                  this.newService.all_news.push(element)
                }))
      
              if(pages.Seminario)
                pages.Semninario.forEach(((element: any) => {
                  this.newService.all_news.push(element)
                }))
              
              if(pages.Sinart)
                pages.Sinart.forEach(((element: any) => {
                  this.newService.all_news.push(element)
                }))
              
              this.loading = false
            },
            error: (err: HttpErrorResponse) => {
              this.globalService.showMessage(`Error: ${err.message}`, 'error', true);
            },
          });
        }
      )
    }
  }

}
