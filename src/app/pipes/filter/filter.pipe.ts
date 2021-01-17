import { Pipe, PipeTransform } from '@angular/core';

// using pipe "filter" in to search/filter the computers list by name

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(computers: Array<Computer>, name: string): Array<Computer> {
        
    if (name == "")
      return computers;

    return computers.filter(function (computer) {
      // computer's name match the filter, so display this computer
      if (computer.name.toLowerCase().includes(name.toLowerCase()))
        return true;

      // computer's name is not matching the filter, so don't display this computer
      return false;
    });
  }

}
