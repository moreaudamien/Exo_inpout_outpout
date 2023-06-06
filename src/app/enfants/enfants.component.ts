import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent
 {
  @Input() personnage: any; 

  @Output() Delettepersonnage = new EventEmitter<any>();

  supprimer() {
    this.Delettepersonnage.emit(this.personnage);
    

    }}
