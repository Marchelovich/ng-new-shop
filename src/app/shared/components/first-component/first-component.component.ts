import {ChangeDetectionStrategy, Component, Inject, Optional} from '@angular/core';
import {CategoryEnum} from "./CategoryEnum";
import {generatedString, GeneratorService} from "../../../core/services/generator";
import {info, INFORMATION} from "../../../core/services/constants.service";
import { GeneratorFactory } from 'src/app/core/services/generator.factory';
import {LocalStorageService, localStorageServiceToken} from "../../../core/services/local-storage.service";
import {InfoModel} from "../../../core/models/info.model";
import {ConfigOptionsService} from "../../../core/services/config-options.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [
    GeneratorService,
    { provide: INFORMATION, useValue: info },
    {
      provide: generatedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService]
    },
    {
      provide: localStorageServiceToken,
      useValue: new LocalStorageService()
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FirstComponentComponent {
  name: string = "Component name";
  description: string = "Component description";
  price: number = 0;
  categories: Array<CategoryEnum> = [ CategoryEnum.Product, CategoryEnum.Service ];
  isAvailable: boolean = true;

  constructor(
    @Optional() public configService: ConfigOptionsService,
    @Optional() @Inject(INFORMATION) public info: InfoModel,
    @Optional() @Inject(generatedString) public generator: string,
    @Optional() public generatorService: GeneratorService,
    @Optional() @Inject(localStorageServiceToken) public localStorageService: LocalStorageService
  ) {}


  test() {
    this.localStorageService.setItem('x', 'y');
    this.configService.setConfig({id: '1', login: 'John', email: 'i@i.com'});
    this.configService.setConfigProperty('id', '2');
    this.configService.setConfigProperty('login', 'Smith');
    this.configService.setConfigProperty('email', 'y@y.com');
  }
}
