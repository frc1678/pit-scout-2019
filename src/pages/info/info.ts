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
  pitRobotMinHeight: Number;
  pitRobotMaxHeight: Number;
  pitWheelDiameter: String;
  pitProgrammingLanguage: String;
  pitDrivetrain: String;
  pitSandstormNavigationType: String;
  pitClimbType: Map<String,Number>; // Maps https://stackoverflow.com/questions/37699320/iterating-over-typescript-map
  pitSelf: String;
  pitRobot1: String;
  pitRobot2: String;
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
  pitWeightObserve: Observable<any>;
  pitRobotWidthObserve: Observable<any>;
  pitRobotLengthObserve: Observable<any>;
  pitRobotMinHeightObserve: Observable<any>;
  pitRobotMaxHeightObserve: Observable<any>;
  pitWheelDiameterObserve: Observable<any>;
  pitProgrammingLanguageObserve: Observable<any>;
  pitDrivetrainObserve: Observable<any>;
  pitSandstormNavigationTypeObserve: Observable<any>;
  pitSelfObserve: Observable<any>;
  pitRobot1Observe: Observable<any>;
  pitRobot2Observe: Observable<any>;
  pitHasCameraObserve: Observable<any>;
  pitHasVisionObserve: Observable<any>;
  pitCanBuddyStartLevel2Observe: Observable<any>;
  pitHasOrangeShooterObserve: Observable<any>;
  pitHasPidObserve: Observable<any>;
  pitHasGyroObserve: Observable<any>;
  pitHasEncodersObserve: Observable<any>;
  pitSEALsNotesObserve: Observable<any>;
  name: String;
  storage: Storage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    ) {
      this.fb = navParams.get('firebase')
      this.number = navParams.get('number')
      this.name = navParams.get('name')
      this.storage = navParams.get('storage')
      this.pitWeightObserve = this.fb.object('Teams/'+this.number.toString()+'/pitWeight/').valueChanges()
      let subWeight = this.pitWeightObserve.subscribe(
        value => {
          this.pitWeight = value
          this.storage.set(''+this.number+'/pitWeight',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitWeight retrieved')
      )
      this.pitRobotWidthObserve = this.fb.object('Teams/'+this.number.toString()+'/pitRobotWidth/').valueChanges()
      let subWidth = this.pitRobotWidthObserve.subscribe(
        value => {
          this.pitRobotWidth = value
          this.storage.set(''+this.number+'/pitRobotWidth',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitRobotWidth retrieved')
      )
      this.pitRobotLengthObserve = this.fb.object('Teams/'+this.number.toString()+'/pitRobotLength/').valueChanges()
      let subLength = this.pitRobotLengthObserve.subscribe(
        value => {
          this.pitRobotLength = value
          this.storage.set(''+this.number+'/pitRobotLength',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitRobotLength retrieved')
      )
      this.pitRobotMinHeightObserve = this.fb.object('Teams/'+this.number.toString()+'/pitRobotMinHeight/').valueChanges()
      let subMinHeight = this.pitRobotMinHeightObserve.subscribe(
        value => {
          this.pitRobotMinHeight = value
          this.storage.set(''+this.number+'/pitRobotMinHeight',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitRobotMinHeight retrieved')
      )
      this.pitRobotMaxHeightObserve = this.fb.object('Teams/'+this.number.toString()+'/pitRobotMaxHeight/').valueChanges()
      let subMaxHeight = this.pitRobotMaxHeightObserve.subscribe(
        value => {
          this.pitRobotMaxHeight = value
          this.storage.set(''+this.number+'/pitRobotMaxHeight',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitRobotMaxHeight retrieved')
      )
      this.pitWheelDiameterObserve = this.fb.object('Teams/'+this.number.toString()+'/pitWheelDiameter/').valueChanges()
      let subWheelDiameter = this.pitWheelDiameterObserve.subscribe(
        value => {
          this.pitWheelDiameter = value
          this.storage.set(''+this.number+'/pitWheelDiameter',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitWheelDiameter retrieved')
      )
      this.pitProgrammingLanguageObserve = this.fb.object('Teams/'+this.number.toString()+'/pitProgrammingLanguage/').valueChanges()
      let subProgrammingLanguage = this.pitProgrammingLanguageObserve.subscribe(
        value => {
          this.pitProgrammingLanguage = value
          this.storage.set(''+this.number+'/pitProgrammingLanguage',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitProgrammingLanguage retrieved')
      )
      this.pitDrivetrainObserve = this.fb.object('Teams/'+this.number.toString()+'/pitDrivetrain/').valueChanges()
      let subDrivetrain = this.pitDrivetrainObserve.subscribe(
        value => {
          this.pitDrivetrain = value
          this.storage.set(''+this.number+'/pitDrivetrain',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitDrivetrain retrieved')
      )
      this.pitSandstormNavigationTypeObserve = this.fb.object('Teams/'+this.number.toString()+'/pitSandstormNavigationType/').valueChanges()
      let subSandstormNavigationType = this.pitSandstormNavigationTypeObserve.subscribe(
        value => {
          this.pitSandstormNavigationType = value
          this.storage.set(''+this.number+'/pitSandstormNavigationType',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitSandstormNavigationType retrieved')
      )
      this.pitSelfObserve = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/self').valueChanges()
      let subSelf = this.pitSelfObserve.subscribe(
        value => {
          this.pitSelf = ""+value
          this.pitClimbType = new Map();
          this.pitClimbType.set('pitSelf',+this.pitSelf)
          this.pitClimbType.set('robot1',+this.pitRobot1)
          this.pitClimbType.set('robot2',+this.pitRobot2)
          this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType)
        },
        error => console.log('ERROR: ' + error),
        () => this.climberTypeHasChanged()
      )
      this.pitRobot1Observe = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/robot1/').valueChanges()
      let subRobot1 = this.pitRobot1Observe.subscribe(
        value => {
          this.pitRobot1 = ""+value
          this.pitClimbType = new Map();
          this.pitClimbType.set('pitSelf',+this.pitSelf)
          this.pitClimbType.set('robot1',+this.pitRobot1)
          this.pitClimbType.set('robot2',+this.pitRobot2)
          this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType)
        },
        error => console.log('ERROR: ' + error),
        () => this.climberTypeHasChanged()
      )
      this.pitRobot2Observe = this.fb.object('Teams/'+this.number.toString()+'/pitClimbType/robot2/').valueChanges()
      let subRobot2 = this.pitRobot2Observe.subscribe(
        value => {
          this.pitRobot2 = ""+value
          this.pitClimbType = new Map();
          this.pitClimbType.set('pitSelf',+this.pitSelf)
          this.pitClimbType.set('robot1',+this.pitRobot1)
          this.pitClimbType.set('robot2',+this.pitRobot2)
          this.storage.set(''+this.number+'/pitClimbType',this.pitClimbType)
        },
        error => console.log('ERROR: ' + error),
        () => this.climberTypeHasChanged()
      )
      this.pitHasCameraObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasCamera/').valueChanges()
      let subHasCamera = this.pitHasCameraObserve.subscribe(
        value => {
          this.pitHasCamera = value
          this.storage.set(''+this.number+'/pitHasCamera',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasCamera retrieved')
      )
      this.pitHasVisionObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasVision/').valueChanges()
      let subHasVision = this.pitHasVisionObserve.subscribe(
        value => {
          this.pitHasVision = value
          this.storage.set(''+this.number+'/pitHasVision',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasVision retrieved')
      )
      this.pitCanBuddyStartLevel2Observe = this.fb.object('Teams/'+this.number.toString()+'/pitCanBuddyStartLevel2/').valueChanges()
      let subCanBuddyStartLevel2 = this.pitCanBuddyStartLevel2Observe.subscribe(
        value => {
          this.pitCanBuddyStartLevel2 = value
          this.storage.set(''+this.number+'/pitCanBuddyStartLevel2',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitCanBuddyStartLevel2 retrieved')
      )
      this.pitHasOrangeShooterObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasOrangeShooter/').valueChanges()
      let subHasOrangeShooter = this.pitHasOrangeShooterObserve.subscribe(
        value => {
          this.pitHasOrangeShooter = value
          this.storage.set(''+this.number+'/pitHasOrangeShooter',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasOrangeShooter retrieved')
      )
      this.pitHasPidObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasPid/').valueChanges()
      let subHasPid = this.pitHasPidObserve.subscribe(
        value => {
          this.pitHasPid = value
          this.storage.set(''+this.number+'/pitHasPid',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasPid retrieved')
      )
      this.pitHasGyroObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasGyro/').valueChanges()
      let subHasGyro = this.pitHasGyroObserve.subscribe(
        value => {
          this.pitHasGyro = value
          this.storage.set(''+this.number+'/pitHasGyro',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasGyro retrieved')
      )
      this.pitHasEncodersObserve = this.fb.object('Teams/'+this.number.toString()+'/pitHasEncoders/').valueChanges()
      let subHasEncoders = this.pitHasEncodersObserve.subscribe(
        value => {
          this.pitHasEncoders = value
          this.storage.set(''+this.number+'/pitHasEncoders',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitHasEncoders retrieved')
      )
      this.pitSEALsNotesObserve = this.fb.object('Teams/'+this.number.toString()+'/pitSEALsNotes/').valueChanges()
      let subSEALsNotes = this.pitSEALsNotesObserve.subscribe(
        value => {
          this.pitSEALsNotes = value
          this.storage.set(''+this.number+'/pitSEALsNotes',value)
        },
        error => console.log('ERROR: ' + error),
        () => console.log('pitSEALsNotes retrieved')
      )
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
    console.log('driveTrain: ' + this.pitDrivetrain);
    try {
      this.fb.object('/Teams/'+this.number.toString()+"/pitDrivetrain").set(this.pitDrivetrain);
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
      this.pitClimbType.set('pitSelf',+this.pitSelf)
      this.pitClimbType.set('robot1',+this.pitRobot1)
      this.pitClimbType.set('robot2',+this.pitRobot2)
    }
    catch {
      this.pitClimbType = new Map();
      this.pitClimbType.set('pitSelf',+this.pitSelf)
      this.pitClimbType.set('robot1',+this.pitRobot1)
      this.pitClimbType.set('robot2',+this.pitRobot2)
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
