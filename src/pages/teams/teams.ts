import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teamsList: AngularFireList<any>;
  teams: Observable<any[]>;
  fb: AngularFireDatabase;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    firebase: AngularFireDatabase) {
    this.teamsList = firebase.list('/Teams');
    this.teams = this.teamsList.valueChanges();
    this.fb = firebase;
  }

  goToInfoPage(num,name) {
    console.log("go to InfoPage with team number " + num)
    this.navCtrl.push(InfoPage,{
      firebase:this.fb,
      number:num,
      name:name
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  addTeam(){
    let prompt = this.alertCtrl.create({
      title: 'New Team',
      message: "Enter the team number and name",
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter Team Number'
        },
        {
          name: 'name',
          placeholder: 'Enter Team Name'
        }
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          console.log(data.title)
          const newTeamRef = this.fb.object('/Teams/'+data.title);
          console.log(data)
          newTeamRef.set({
            number: parseInt(data.title),
            name: data.name
          })
        }
      }
    ]
  });
  prompt.present();
  }
}
