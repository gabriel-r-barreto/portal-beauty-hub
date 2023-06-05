import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  onSend(){
    alert('Arquivo Enviado')
  }
  Cancel(){
   
  }
}
