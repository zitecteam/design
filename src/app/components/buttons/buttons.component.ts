import { Component, OnInit } from '@angular/core';
import { ButtonsCodeBlocks } from './buttons.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  public data = ButtonsCodeBlocks;

  constructor(public readonly appService: AppService) { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }
}
