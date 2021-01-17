import { Computer } from './../../classes/computer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() computers: Array<Computer> = new Array<Computer>();
  computerToAdd: Computer = new Computer();

  constructor() { }

  ngOnInit(): void {

    // testing
    this.addComputer("Comp1");
    this.addComputer("Comp2");
  }

  // insert a new computer to the array
  addComputer(name: string): void {

    console.log(name);

    // generate an automatic id by using the array length
    let id: number = this.computers.length + 1;
    
    // create a computer with that automatic id and given params
    let computer: Computer = new Computer(id, name); 

    // adding the new computers to the array
    this.computers.push(computer);
  }
}
