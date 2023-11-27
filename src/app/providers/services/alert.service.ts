import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  public notification(icon: any = 'success', title: string, text: string) {
    const swalPersonalizado = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-secondary',
      },
      buttonsStyling: false,
    });
    swalPersonalizado.fire({
      position: 'center',
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: true,
    });
  }

  public close(): void {
    Swal.close();
  }
}
