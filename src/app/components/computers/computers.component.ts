import { Component, Input, OnInit } from '@angular/core';
import { Computer } from 'src/app/classes/computer';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
  providers: [DataService]
})
export class ComputersComponent implements OnInit {

  @Input() computers: Array<Computer> = new Array<Computer>();
  computerToSearch: string = "";

  constructor(private data: DataService) { }

  ngOnInit(): void {

    // testing
    this.computers.push(new Computer(1, "comp 1", "https://www.ivory.co.il/files/catalog/org/1602163164b64Sy.jpg"));
    this.computers.push(new Computer(1, "comp 2", "https://www.ivory.co.il/files/catalog/org/1608463221t21VM.jpg"));
    this.computers.push(new Computer(1, "comp 3", "https://www.ivory.co.il/files/catalog/org/1602163164b64Sy.jpg"));
    this.computers.push(new Computer(1, "comp 4", "https://www.ivory.co.il/files/catalog/org/1602163164b64Sy.jpg"));

    this.getData();
  }

  getData() {
    this.data.getData();
  }

}
