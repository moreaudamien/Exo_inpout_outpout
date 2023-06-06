import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})




export class ParentsComponent {

 
  Damien = new personnage("Damien", 30, "Batte de base-ball");
  Mathieu = new personnage("Mathieu", 30, "Les femmes");
  Nicolas = new personnage("Nicolas", 70, "Jeux vidéo");
  Thomas = new personnage("Thomas", 20, "Les chats");
  Philipo = new personnage("Philipo", 55, "La pêche");
personnages= [this.Damien, this.Mathieu, this.Nicolas, this.Thomas, this.Philipo];

  supprimer(personnage: any) {
    let index = this.personnages.indexOf(personnage);
    this.personnages.splice(index, 1);
  }

}


export class personnage {
  constructor(
      private name: string,
      private age: number,
      private hobby: string,
    ){}
  }
