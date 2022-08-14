import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { CardFormComponent } from './card-form/card-form.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'businnesCard',
    component: BusinessCardComponent,
  },
  {
    path: 'cardForm',
    component: CardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
