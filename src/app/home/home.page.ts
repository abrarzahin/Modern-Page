import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items=[];

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth,
    private alertController: AlertController) {
    
   
  }
  async addItem() {
    const alert = await this.alertController.create({
      header: 'Please provide a item name',
      inputs: [
        {
          name: 'itemName',
          type: 'text',
          placeholder: 'item name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();

    alert.onDidDismiss().then(result => {
      console.log(result);
      let text: string = result.data.values.itemName;
      console.log(text);
    });
  
}
}
