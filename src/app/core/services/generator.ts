import { Injectable, InjectionToken } from '@angular/core';
import { getNewID } from './gen-id.service';

@Injectable()
export class GeneratorService {

  private static _generator = getNewID();

  getNewID(): number {
    // @ts-ignore
    return this._generator.next().value;
  }

  generate(n: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < n; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

}

export const generatedString = new InjectionToken<GeneratorService>('randomSequence');
