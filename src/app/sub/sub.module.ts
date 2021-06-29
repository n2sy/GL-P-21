import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServersComponent } from './list-servers/list-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { DetailServerComponent } from './detail-server/detail-server.component';
import { BrowserModule } from '@angular/platform-browser';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListServersComponent, EditServerComponent, DetailServerComponent],
  imports: [
  CommonModule,
    BrowserModule,
    FormsModule,
    SUB_ROUTING
  ]
})
export class SubModule { }
