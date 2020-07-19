import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = "eye-off" ;

  constructor() { }

  ngOnInit() {
  }


  togglePassword(): void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
}

