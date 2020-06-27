import { Education } from './../model/education';
import { Profile } from './../model/profile';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private database:AngularFirestore) { }

  GetInfo() {
    return this.database.collection<Profile>("Information").valueChanges();    
  }
  GetEducation() {
    return this.database.collection<Education>("Education").valueChanges();
  }
  GetExperance() {
    return this.database.collection("Experience").valueChanges();
  }
}
