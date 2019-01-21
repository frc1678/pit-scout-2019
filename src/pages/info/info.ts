import { Component } from '@angular/core';
import {  NavController, NavParams, SegmentButton, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
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
  pitSandstormNavigationType: String;
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
  fb: AngularFireDatabase;
  number: Number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
      this.fb = navParams.get('firebase')
      this.number = navParams.get('number')
      //Time to get some data! ... later
  }

  weightChanged() {
    console.log('weight: ' + this.pitWeight);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitWeight").set(+this.pitWeight);
    } catch(e) {
      console.log(e)
    }
  }

  robotWidthChanged() {
    console.log('width: ' + this.pitRobotWidth);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotWidth").set(+this.pitRobotWidth);
    } catch(e) {
      console.log(e)
    }
  }

  robotLengthChanged() {
    console.log('length: ' + this.pitRobotLength);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotLength").set(+this.pitRobotLength);
    } catch(e) {
      console.log(e)
    }
  }

  robotMinHeightChanged() {
    console.log('minHeight: ' + this.pitRobotMinHeight);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotMinHeight").set(+this.pitRobotMinHeight);
    } catch(e) {
      console.log(e)
    }
  }

  robotMaxHeightChanged() {
    console.log('maxHeight: ' + this.pitRobotMaxHeight);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitRobotMaxHeight").set(+this.pitRobotMaxHeight);
    } catch(e) {
      console.log(e)
    }
  }

  wheelDiameterChanged() {
    console.log('wheelDiameter: ' + this.pitWheelDiameter);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitWheelDiameter").set(this.pitWheelDiameter);
    } catch(e) {
      console.log(e)
    }
  }

  programmingLanguageChanged() {
    console.log('programmingLanguage: ' + this.pitProgrammingLanguage);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitProgrammingLanguage").set(this.pitProgrammingLanguage);
    } catch(e) {
      console.log(e)
    }
  }

  driveTrainChanged() {
    console.log('driveTrain: ' + this.pitDriveTrain);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitDrivetrain").set(this.pitDriveTrain);
    } catch(e) {
      console.log(e)
    }
  }

  sandstormChanged() {
    console.log('sandStorm: ' + this.pitSandstormNavigationType);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitSandstormNavigationType").set(this.pitSandstormNavigationType);
    } catch(e) {
      console.log(e)
    }
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
    console.log(this.pitClimbType)
    for (const key in this.pitClimbType) {
      console.log(key + ' ' + this.pitClimbType[key])
    }
    try {
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/self').set(+this.pitSelf)
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/robot1').set(+this.pitRobot1)
      this.fb.object('/Teams/'+this.number.toString()+'/pitClimbType/robot2').set(+this.pitRobot2)
    } catch(e) {
      console.log(e)
    }
  }

  hasOrangeShooterSwitch() {
    console.log('pitHasOrangeShooter: ' + this.pitHasOrangeShooter)
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasOrangeShooter").set(this.pitHasOrangeShooter);
    } catch(e) {
      console.log(e)
    }
  }

  hasCameraSwitch() {
    console.log('hasCamera: '+ this.pitHasCamera);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasCamera").set(this.pitHasCamera);
    } catch(e) {
      console.log(e)
    }
  }

  hasVisionSwitch() {
    console.log('hasVision: '+ this.pitHasVision);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasVision").set(this.pitHasVision);
    } catch(e) {
      console.log(e)
    }
  }
  canBuddyStartLevel2Switch() {
    console.log('canBuddyStartLevel2Switch: ' + this.pitCanBuddyStartLevel2);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitCanBuddyStartLevel2").set(this.pitCanBuddyStartLevel2);
    } catch(e) {
      console.log(e)
    }
  }

  hasPIDSwitch() {
    console.log('hasPid: '+ this.pitHasPid);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasPid").set(this.pitHasPid);
    } catch(e) {
      console.log(e)
    }
  }

  hasGyroSwitch() {
    console.log('hasGyro: '+ this.pitHasGyro);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasGyro").set(this.pitHasGyro);
    } catch(e) {
      console.log(e)
    }
  }

  hasEncodersSwitch() {
    console.log('hasEncoders: '+ this.pitHasEncoders);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitHasEncoders").set(this.pitHasEncoders);
    } catch(e) {
      console.log(e)
    }
  }

  notesChanged() {
    console.log('Notes: ' + this.pitSEALsNotes);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitSEALsNotes").set(this.pitSEALsNotes);
    } catch(e) {
      console.log(e)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
