import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.page.html',
  styleUrls: ['./problemas.page.scss'],
})
export class ProblemasPage implements OnInit {
// image: any;
  constructor() { }

  ngOnInit() {
  }
 /* sacarCamera() {
this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.CAMERA,
  mediaType: this.camera.MediaType.PICTURE,
  allowEdit: false,
  encodingType: this.camera.EncodingType.JPEG,
  targetHeight: 1024,
  targetWidth: 1024,
  correctOrientation: true,
  saveToPhotoAlbum: true,
}).then(resultado => {
  this.image = 'data:image/jpeg;base64,' + resultado;
}).catch(errror => {
  console.log(errror);
})
}
 usarGaleria() {

 } */
}
