import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  title = 'ng-new-shop';

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = 'AppTitle'
  }
}
