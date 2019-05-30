import { Component } from '@angular/core';
import {  NavController, NavParams, SegmentButton, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  pitWeight: Number;
  pitRobotWidth: Number;
  pitRobotLength: Number;
  pitNumDriveTrainMotors: Number;
  pitDriveTrainMotorType: String;
  pitWheelDiameter: String;
  pitWheelType: String;
  pitProgrammingLanguage: String;
  pitDrivetrain: String;
  pitSEALsRampRanking: String;
  pitClimbType: Map<String,Number>; // Maps https://stackoverflow.com/questions/37699320/iterating-over-typescript-map
  pitSelf: String;
  pitRobot1: String;
  pitRobot2: String;
  pitIsLemonSpecialist: boolean;
  pitHasCamera: boolean;
  pitSEALsNotes: String;
  fb: AngularFireDatabase;
  number: Number;
  pitWeightObserve: Observable<any>;
  pitRobotWidthObserve: Observable<any>;
  pitRobotLengthObserve: Observable<any>;
  pitNumDriveTrainMotorsObserve: Observable<any>;
  pitDriveTrainMotorTypeObserve: Observable<any>;
  pitWheelDiameterObserve: Observable<any>;
  pitWheelTypeObserve: Observable<any>;
  pitProgrammingLanguageObserve: Observable<any>;
  pitDrivetrainObserve: Observable<any>;
  pitSEALsRampRankingObserve: Observable<any>;
  pitSelfObserve: Observable<any>;
  pitRobot1Observe: Observable<any>;
  pitRobot2Observe: Observable<any>;
  pitIsLemonSpecialistObserve: Observable<any>;
  pitHasCameraObserve: Observable<any>;
  pitSEALsNotesObserve: Observable<any>;
  name: String;
  storage: Storage;
  pitDataKeys: string[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
      this.fb = navParams.get('firebase');
      this.number = navParams.get('number');
      this.name = navParams.get('name');
      this.storage = navParams.get('storage');
      this.pitDataKeys = ['pitWeight',
      'pitRobotWidth',
      'pitRobotLength',
      'pitNumDriveTrainMotors',
      'pitDriveTrainMotorType',
      'pitWheelDiameter',
      'pitWheelType',
      'pitProgrammingLanguage',
      'pitDrivetrain',
      'pitIsLemonSpecialist',
      'pitHasCamera',
      'pitSEALsNotes'];

        for (var i = 0; i < this.pitDataKeys.length; i++) {
          this[this.pitDataKeys[i] + 'Observe'] = this.fb.object('Teams/' + this.number.toString() + '/' + this.pitDataKeys[i] + '/').valueChanges();
          let ii = i;
          let subValue = this[this.pitDataKeys[ii]+'Observe'].subscribe(
            value => {
              this[this.pitDataKeys[ii]] = value;
              this.storage.set('' + this.number + '/' + this.pitDataKeys[ii],value);
            },
            error => console.log('ERROR: ' + error),
            () => console.log(this.pitDataKeys[ii] + ' retrieved')
          )
        }

        this.pitSEALsRampRankingObserve = this.fb.object('Teams/'+this.number.toString()+'/pitSEALsRampRanking').valueChanges();
        let subRampRanking = this.pitSEALsRampRankingObserve.subscribe(
          value => {
            this.pitSEALsRampRanking = ""+value;
            this.storage.set(''+this.number+'/pitSEALsRampRanking',this.pitSEALsRampRanking);
          },
          error => console.log('ERROR: ' + error),
          () => this.climberTypeHasChanged(),
        )
        this.pitSelfObserve = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/self').valueChanges()
        let subSelf = this.pitSelfObserve.subscribe(
          value => {
            this.pitSelf = ""+value;
            this.pitClimbType = new Map();
            this.pitClimbType.set('pitSelf',+this.pitSelf);
            this.pitClimbType.set('robot1',+this.pitRobot1);
            this.pitClimbType.set('robot2',+this.pitRobot2);
            this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType);
          },
          error => console.log('ERROR: ' + error),
          () => this.climberTypeHasChanged(),
        )
        this.pitRobot1Observe = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/robot1/').valueChanges()
        let subRobot1 = this.pitRobot1Observe.subscribe(
          value => {
            this.pitRobot1 = ""+value;
            this.pitClimbType = new Map();
            this.pitClimbType.set('pitSelf',+this.pitSelf);
            this.pitClimbType.set('robot1',+this.pitRobot1);
            this.pitClimbType.set('robot2',+this.pitRobot2);
            this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType);
          },
          error => console.log('ERROR: ' + error),
          () => this.climberTypeHasChanged(),
        )
        this.pitRobot2Observe = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/robot2/').valueChanges()
        let subRobot2 = this.pitRobot2Observe.subscribe(
          value => {
            this.pitRobot2 = ""+value;
            this.pitClimbType = new Map();
            this.pitClimbType.set('pitSelf',+this.pitSelf);
            this.pitClimbType.set('robot1',+this.pitRobot1);
            this.pitClimbType.set('robot2',+this.pitRobot2);
            this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType);
          },
          error => console.log('ERROR: ' + error),
          () => this.climberTypeHasChanged(),
        )
      }
      weightChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitWeight").set(+this.pitWeight);
    } catch(e) {
      console.log(e);
    }
  }

  robotWidthChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotWidth").set(+this.pitRobotWidth);
    } catch(e) {
      console.log(e);
    }
  }

  robotLengthChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotLength").set(+this.pitRobotLength);
    } catch(e) {
      console.log(e);
    }
  }

  pitNumDriveTrainMotorsChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitNumDriveTrainMotors").set(+this.pitNumDriveTrainMotors);
    } catch(e) {
      console.log(e);
    }
  }

  driveTrainMotorTypeChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitDriveTrainMotorType").set(this.pitDriveTrainMotorType);
    } catch(e) {
      console.log(e);
    }
  }

  wheelDiameterChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitWheelDiameter").set(this.pitWheelDiameter);
    } catch(e) {
      console.log(e);
    }
  }

  wheelTypeChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitWheelType").set(this.pitWheelType);
    } catch(e) {
      console.log(e);
    }
  }

  programmingLanguageChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitProgrammingLanguage").set(this.pitProgrammingLanguage);
    } catch(e) {
      console.log(e);
    }
  }

  driveTrainChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitDrivetrain").set(this.pitDrivetrain);
    } catch(e) {
      console.log(e);
    }
  }

  climberSelfHasChanged() {
    this.climberTypeHasChanged();
  }

  climberRobot1HasChanged() {
    this.climberTypeHasChanged();
  }

  climberRobot2HasChanged() {
    this.climberTypeHasChanged();
  }

  climberTypeHasChanged() {
    try {
      this.pitClimbType.set('pitSelf',+this.pitSelf);
      this.pitClimbType.set('robot1',+this.pitRobot1);
      this.pitClimbType.set('robot2',+this.pitRobot2);
    }
    catch {
      this.pitClimbType = new Map();
      this.pitClimbType.set('pitSelf',+this.pitSelf);
      this.pitClimbType.set('robot1',+this.pitRobot1);
      this.pitClimbType.set('robot2',+this.pitRobot2);
    }
    try {
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/self').set(+this.pitSelf);
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/robot1').set(+this.pitRobot1);
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/robot2').set(+this.pitRobot2);
    } catch(e) {
      console.log(e)
    }
  }

  isLemonSpecialist() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitIsLemonSpecialist").set(this.pitIsLemonSpecialist);
    } catch(e) {
      console.log(e)
    }
  }

  hasCameraSwitch() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasCamera").set(this.pitHasCamera);
    } catch(e) {
      console.log(e)
    }
  }

  rampAbilityChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitSEALsRampRanking").set(Number(this.pitSEALsRampRanking));
    } catch(e) {
      console.log(e)
    }
  }

  notesChanged() {
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitSEALsNotes").set(this.pitSEALsNotes);
    } catch(e) {
      console.log(e)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter InfoPage');
    if(this.pitIsLemonSpecialist == undefined) {
      this.pitIsLemonSpecialist = false;
      this.fb.object('/Teams/'+this.number.toString()+"/pitIsLemonSpecialist").set(this.pitIsLemonSpecialist);
    }
    if(this.pitHasCamera == undefined) {
      this.pitHasCamera = false;
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasCamera").set(this.pitHasCamera);
    }
  }
}
