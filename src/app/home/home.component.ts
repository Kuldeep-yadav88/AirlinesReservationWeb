import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Options } from '../shared/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  minDate = new Date();
  isHovered: boolean[] = [false, false, false, false];
  selected='';
  classEco= '';
  myControl = new FormControl('');
  options: string[] = Options
  filteredOptions: Observable<string[]> | undefined;


  constructor( ){}

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  


  onMouseEnter(index: number) {
    this.isHovered[index] = true;
  }

  onMouseLeave(index: number){
    this.isHovered[index] = false;
  }



}
