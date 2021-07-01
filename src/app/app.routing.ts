import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ParentComponent } from './parent/parent.component';
import { ServersComponent } from './servers/servers.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';
import { LoggedGuard } from './logged.guard';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/nidhal', component: ParentComponent },
  { path: 'cv/add', component: AddComponent, canActivate: [LoggedGuard] },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'cv/edit/:id', component: UpdateComponent },
  //   {
  //     path: 'cv',
  //     children: [
  //       { path: '', component: CvComponent },
  //       { path: ':id', component: InfosComponent },
  //       { path: 'edit/:id', component: UpdateComponent },
  //     ],
  //   },
  { path: 'word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'serveur', loadChildren: '../app/sub/sub.module.ts#SubModule' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
