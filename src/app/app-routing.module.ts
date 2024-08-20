import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { InputNoteComponent } from './input-note/input-note.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { TrashComponent } from './dashboard/trash/trash.component';
const routes: Routes = [

  {'path': '', component: LoginComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'register', component: RegisterComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
    { 'path':'',
        component: InputNoteComponent
    },
    { 'path':'input-note',
      component: InputNoteComponent
    },
    { 'path':'archive',
      component: ArchiveComponent
    },
    { 'path':'trash',
      component: TrashComponent
    },

    ]
  },
 
  {
    path:'basicinfo',
    component:BasicinfoComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
