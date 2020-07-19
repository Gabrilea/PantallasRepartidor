import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';

  mostarValidacion = false;
  validacionToggleIcon = 'eye';
  constructor(private alertCtrl: AlertController) { }
  togglePassword(): void{
    this.showPassword = ! this.showPassword;
    if (this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
  toggleValidacion(): void {
    this.mostarValidacion = ! this.mostarValidacion;
    if (this.validacionToggleIcon =='eye') {
      this.validacionToggleIcon='eye-off';
  }
  else{
    this.validacionToggleIcon= 'eye';
    }
  }
  ngOnInit() {
  }
  async presentAlert() {
    const alert = this.alertCtrl.create({
    header: 'Guardado',
    subHeader: 'Su nueva contraseña se ha guardado con exito.',
    buttons: ['Ok']
   }).then( alert => alert.present());
    }
}