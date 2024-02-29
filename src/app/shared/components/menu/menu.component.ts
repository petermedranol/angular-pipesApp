import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },

            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Uno',
                    icon: 'pi pi-cog'
                  },
                  {
                    label: 'Dos',
                    icon: 'pi pi-cog',
                    items: [
                      {
                        label: 'Tres',
                        icon: 'pi pi-cog'
                      },
                      {
                        label: 'Cuatro',
                        icon: 'pi pi-cog',
                        items: [
                          {
                            label: 'Cinco',
                            icon: 'pi pi-cog'
                          },
                          {
                            label: 'Seis',
                            icon: 'pi pi-cog',
                            items: [
                              {
                                label: 'Siete',
                                icon: 'pi pi-cog'
                              },
                              {
                                label: 'Ocho',
                                icon: 'pi pi-cog'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ];
    }
}
