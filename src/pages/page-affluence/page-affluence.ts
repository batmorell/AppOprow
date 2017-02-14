import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChartsModule } from 'ng2-charts/ng2-charts';

/*
  Generated class for the PageAffluence page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-affluence',
  templateUrl: 'page-affluence.html'
})
export class PageAffluence {

  public date = giveDate();
  public adminId:any;
  public horaire = "13h20"//for the moment

  constructor(public navCtrl: NavController, public navParams: NavParams, public chartsModule: ChartsModule) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAffluencePage');
  }

  public barChartOptions:any = {
    responsive: true,
    scaleLineColor: 'transparent'
  };

  public barChartLabels:string[] = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];

  public barChartType:string = 'bar';

  public barChartLegend:boolean = false;

  private colors = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    }
  ];

  public barChartData:any[] = [
    {data: [12, 18, 15, 20, 18, 23, 26, 20, 19, 16, 17, 16, 12], label: 'Series A'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
function giveDate(){
  var dateString
  var date = new Date()
  var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
  var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  dateString = days[date.getDay()-1] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
  return dateString;
}