import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (selStatus.length == 0) return value;
    else {
      let newListServers = [];
      for (const serv of value) {
        if (serv['status'] == selStatus) newListServers.push(serv);
      }
      return newListServers;
    }
  }
}
