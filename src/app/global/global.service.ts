import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  bool: boolean = false;

  constructor(
    private http: HttpClient 
  ) { }

  startUpServer(){
    return this.http.post(`${environment.back_url}/clasificator`, null, {observe: 'response'})
  }

  async showMessage(
    title: any,
    icon: any,
    toast: boolean,
    timer?: number,
    center?: string
  ) {
    await delay(300);
    const Toast = Swal.mixin({
      toast: toast,
      showConfirmButton: false,
      position: center != undefined ? 'center' : 'top-end',
      timer: timer != undefined ? timer : 3000,
    });
    !toast
      ? Toast.fire({
          title: title,
          icon: icon,
          showClass: {
            popup: 'animate__animated animate__shakeX',
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOut',
          },
        })
      : Toast.fire({
          title: title,
          icon: icon,
        });
  }
}
