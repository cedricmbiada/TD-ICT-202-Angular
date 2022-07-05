
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

//new importation service for translation
import {TranslateService} from "@ngx-translate/core";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
theme='light'
 
  title = 'Group 7'
  adress = 'Odza, Yaounde, Cameroun'
  competetext = 'Enter Your skills Please...'
  traintext = 'Enter Your Training Please...'
  certiftext = 'Enter Your Certifications Please...'
  //doc1 = 'This is my first document'
  //doc2 = 'This is my second document'
  doc3 = 'This is my first document'
  doc4 = 'This is my second document'
  tel = '695331745'
  experienceText = 'Fullstack Web Developper'
  //socialtest = 'moi'
  loisirText = 'Football'
  email = 'Group7@gmail.com'

  name = false;
  place = false;
  competence = false;
  training = false;
  certification = false;
  //docu1 = false;
  //docu2 = false;
  docu3 = false;
  docu4 = false;
  contacts = false;
  mail = false;
  exp = false;
  loisir = false;
//social = false;
  test :any=0 ;
  change()
  {
    this.name = !this.name;
  }
  change1()
  {
    this.place = !this.place;
  }
  change2()
  {
    this.competence = !this.competence;
  }
  change3()
  {
    this.training = !this.training;
  }
  change4()
  {
    this.certification = !this.certification;
  }
  /*change5()
  {
    this.docu1 = !this.docu1;
  }
  change6()
  {
    this.docu2 = !this.docu2;
  }*/
  change7()
  {
    this.contacts = !this.contacts;
  }
  change8()
  {
    this.mail = !this.mail;
  }
  changeExp()
  {
    this.exp = !this.exp;
  }
  changeLois()
  {
    this.loisir = !this.loisir;
  }

  /* changesoc()
  {
    this.social = !this.social;
  }*/
  change9()
  {
    this.docu3 = !this.docu3;
  }
  change10()
  {
    this.docu4 = !this.docu4;
  }
  urllink:string = "assets/images/Maphoto.jpg";
  selectFiles(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) =>{
        this.urllink = event.target.result
      }
    }
  }


  //function for translation
  constructor(private translate: TranslateService, private themeService: ThemeService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

@ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement>;
 
  
exportPDF() {
  
  html2canvas(this.el.nativeElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg")

    const pdf = new jsPDF({
      orientation:"portrait"
    })

    const imageProps = pdf.getImageProperties(imgData)

    const pdfw = pdf.internal.pageSize.getWidth()

    const pdfh = (imageProps.height * pdfw) / imageProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh)
    
    pdf.save("CV.pdf")
  })
}

toggle() {
 
  if(this.theme.localeCompare('light') == 0)
      this.theme = 'black'
  else if(this.theme.localeCompare('black') == 0)
  this.theme = 'light'
}

elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';
}
