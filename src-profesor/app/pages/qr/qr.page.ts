import { Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: 'qr.page.html',
  styleUrls: ['qr.page.scss'],
})
export class QrPage {

  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;

  qrCodeString2= 'Hola Mundo'; 
  scannedResult2:any;

  qrCodeString3= 'Hola Mundo'; 
  scannedResult3:any;
 
 
 

  constructor() {}

  usuario={
    nom:'',
  }
  usuario2={
    nom2:'',
  }
  usuario3={
    nom3:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  generaScan2(){
    this.qrCodeString2= this.usuario2.nom2;
  }

  generaScan3(){
    this.qrCodeString3= this.usuario3.nom3;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  verScan2(){
    this.scannedResult2=this.qrCodeString2;
  }

  verScan3(){
    this.scannedResult3=this.qrCodeString3;
  }

}

