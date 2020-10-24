import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFormat'
})
export class ImageFormatPipe implements PipeTransform {

  transform(value: string, host: string, ...args: unknown[]): string {
    var regex = new RegExp("^(http|https)://");
    let res = value.match(regex);
    return res? value : host + value;
  }

}
