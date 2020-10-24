import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkNameFormated'
})
export class LinkNameFormatedPipe implements PipeTransform {

  transform(value: string, id: any, ...args: unknown[]): unknown {
    const regex = new RegExp(/\s\W\w/g);  
    return value.replace(regex, '-').replace('/', '-').split(' ').map(character => character.toLocaleLowerCase()).join("");
  } 
}
