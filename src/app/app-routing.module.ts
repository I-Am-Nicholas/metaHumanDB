import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MetasComponent } from './components/metas.component';
import { MetaDetailComponent } from './components/meta-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/Meta-Human List', pathMatch: 'full' },
  { path: 'detail/:id',  component: MetaDetailComponent },
  { path: 'Meta-Human List',  component: MetasComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
