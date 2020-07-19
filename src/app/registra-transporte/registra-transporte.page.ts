import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registra-transporte',
  templateUrl: './registra-transporte.page.html',
  styleUrls: ['./registra-transporte.page.scss'],
})
export class RegistraTransportePage implements OnInit {

  constructor(private alertCtrl:AlertController) { }
  async presentAlert() {
    const alert = this.alertCtrl.create({
    header: 'Guardado',
    subHeader: 'Su información se ha guardado correctamente.Ahora estas listo para recibir solicitudes y realizar pedidos.',
    buttons: [{
      text: 'Ok',
      handler: ()=>{
      location.href="/repartidor/home"
      }
    }]
   }).then(alert=> alert.present());
}

  ngOnInit() {
  }

}
