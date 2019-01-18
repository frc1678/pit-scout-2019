import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, SegmentButton, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  pitWeight: Number;
  pitRobotWidth: Number;
  pitRobotLength: Number;
  pitRobotMinHeight: Number;
  pitRobotMaxHeight: Number;
  pitWheelDiameter: String;
  pitProgrammingLanguage: String;
  pitDriveTrain: String;
  pitSandStorm: String;
  pitClimbType: Map<String,Number>; // Maps https://stackoverflow.com/questions/37699320/iterating-over-typescript-map
  pitSelf: Number;
  pitRobot1: Number;
  pitRobot2: Number;
  pitHasCamera: boolean;
  pitHasVision: boolean;
  pitCanBuddyStartLevel2: boolean;
  pitHasOrangeShooter: boolean;
  pitHasPid: boolean;
  pitHasGyro: boolean;
  pitHasEncoders: boolean;
  pitSEALsNotes: String;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
  }

  weightChanged() {
    console.log('weight: ' + this.pitWeight);
  }

  robotWidthChanged() {
    console.log('width: ' + this.pitRobotWidth);
  }

  robotLengthChanged() {
    console.log('length: ' + this.pitRobotLength);
  }

  robotMinHeightChanged() {
    console.log('minHeight: ' + this.pitRobotMinHeight);
  }

  robotMaxHeightChanged() {
    console.log('maxHeight: ' + this.pitRobotMaxHeight);
  }

  wheelDiameterChanged() {
    console.log('wheelDiameter: ' + this.pitWheelDiameter);
  }

  programmingLanguageChanged() {
    console.log('programmingLanguage: ' + this.pitProgrammingLanguage);
  }

  driveTrainChanged() {
    console.log('driveTrain: ' + this.pitDriveTrain);
  }

  sandstormChanged() {
    console.log('sandStorm: ' + this.pitSandStorm);
  }

  climberSelfHasChanged() {
    console.log('pitSelf: ' + this.pitSelf);
    this.climberTypeHasChanged();
  }

  climberRobot1HasChanged() {
    console.log('Robot 1: ' + this.pitRobot1);
    this.climberTypeHasChanged();
  }

  climberRobot2HasChanged() {
    console.log('Robot 2: ' + this.pitRobot2);
    this.climberTypeHasChanged();
  }

  climberTypeHasChanged() {
    try {
      this.pitClimbType.set('pitSelf',this.pitSelf)
      this.pitClimbType.set('robot1',this.pitRobot1)
      this.pitClimbType.set('robot2',this.pitRobot2)
    }
    catch {
      this.pitClimbType = new Map();
      this.pitClimbType.set('pitSelf',this.pitSelf)
      this.pitClimbType.set('robot1',this.pitRobot1)
      this.pitClimbType.set('robot2',this.pitRobot2)
    }

    for (const key in this.pitClimbType) {
      console.log(key + ' ' + this.pitClimbType[key])
    }
  }

  hasOrangeShooterSwitch() {
    console.log('pitHasOrangeShooter: ' + this.pitHasOrangeShooter)
  }

  hasCameraSwitch() {
    console.log('hasCamera: '+ this.pitHasCamera);
  }

  hasVisionSwitch() {
    console.log('hasVision: '+ this.pitHasVision);
  }
  canBuddyStartLevel2Switch() {
    console.log('canBuddyStartLevel2Switch: ' + this.pitCanBuddyStartLevel2);
  }

  hasPIDSwitch() {
    console.log('hasPid: '+ this.pitHasPid);
  }

  hasGyroSwitch() {
    console.log('hasGyro: '+ this.pitHasGyro);
  }

  hasEncodersSwitch() {
    console.log('hasEncoders: '+ this.pitHasEncoders);
  }

  notesChanged() {
    console.log('Notes: ' + this.pitSEALsNotes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
