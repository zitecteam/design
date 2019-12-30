import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItems } from '../layout.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nao-navbar',
  templateUrl: './nao-navbar.component.html',
  animations: [
    trigger('expandCollapse', [
      state('expandCollapseState', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(200, style({ height: '0' }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(200, style({ height: '*' }))
      ])
    ])
  ]
})
export class NaoNavbarComponent implements OnInit {
  public menuItems = MenuItems;
  public isCollapsed = true;

  constructor(public readonly appService: AppService) {}

  ngOnInit(): void {}

  /**
   * Toggle a menu item
   */
  public toggleMenu(index): void {
    if (index >= 0) {
      // If the current menu item is closed, close other items
      if (!this.menuItems[index].isOpen) {
        this.menuItems.map((el, i) => {
          if (i !== index) {
            el.isOpen = false;
          }
        });
      }
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
    }
  }

  /**
   * Toggle RTL
   */
  public toggleRTL(){
    this.appService.toggleRTL();
  }

}
