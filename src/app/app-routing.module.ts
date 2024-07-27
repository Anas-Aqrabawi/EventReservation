import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactUSPageComponent } from './contact-uspage/contact-uspage.component';
import { AuthModule } from './auth/auth.module';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'services',
    component:ServicesPageComponent
  },
  {
    path:'contactus',
    component:ContactUSPageComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    //Lazy loading concept
    path:'security',
    loadChildren:()=>AuthModule
  },
  //To make home page the default page
  //http://localhost:4200/
  {
    path:'',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
