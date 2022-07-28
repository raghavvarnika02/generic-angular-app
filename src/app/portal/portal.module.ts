import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  declarations: [
    PortalComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PortalModule { }
