import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { NoImagePipe } from './no-image.pipe';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubModule } from './sub/sub.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ParentComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent,
    DirectComponent,
    MsWordComponent,
    ServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    NoImagePipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    UpdateComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, APP_ROUTING, SubModule],
  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
