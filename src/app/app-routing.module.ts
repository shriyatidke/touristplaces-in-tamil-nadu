import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { MeenakshiTempleComponent } from './meenakshi-temple/meenakshi-temple.component';


const routes: Routes = [
  {path : "", component :  HomeComponent},
  {path : "about", component : AboutUsComponent},
  {path : "contact", component : ContactUsComponent},
  {path : "meenakshi-temple", component :  MeenakshiTempleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
