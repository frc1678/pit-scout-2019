import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, SegmentButton, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  pitAvailableWeight: Number;
  pitRobotWidth: Number;
  pitRobotLength: Number;
  pitWheelDiameter: String;
  pitProgrammingLanguage: String;
  pitDriveTrain: String;
  pitClimberType: String;
  pitDriveTest: String;
  pitHasCamera: boolean;
  pitCanDoPID: boolean;
  pitHasGyro: boolean;
  pitHasEncoders: boolean;
  pitSEALsNotes: String;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
  }

  availableWeightChanged() {
    console.log('Weight: ' + this.pitAvailableWeight)
  }

  robotWidthChanged() {
    console.log('Width: ' + this.pitRobotWidth)
  }

  robotLengthChanged() {
    console.log('Length: ' + this.pitRobotLength)
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

  climberTypeChanged() {
    console.log('climberType: ' + this.pitClimberType);
  }

  driveTestChanged() {
    console.log('driveTest: ' +this.pitDriveTest);
  }

  hasCameraSwitch() {
    console.log("hasCamera: "+ this.pitHasCamera);
  }

  canDoPIDSwitch() {
    console.log("canDoPID: "+ this.pitCanDoPID);
  }

  hasGyroSwitch() {
    console.log("hasGyro: "+ this.pitHasGyro);
  }

  hasEncodersSwitch() {
    console.log("hasEncoders: "+ this.pitHasEncoders);
  }

  notesChanged() {
    console.log('Notes: ' + this.pitSEALsNotes)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
