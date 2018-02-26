import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public placeholder;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();


  public logo = 'assets/images/logo.png';
  public width = '50';

  constructor() {
  }

  ngOnInit() {
  }

  public onInput(value: string): void {
    this.search.emit(value);
  }

}