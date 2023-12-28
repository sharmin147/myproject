import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "service", component: ServiceComponent },
{ path: "about", component: AboutUsComponent },
{ path: "contact", component: ContactComponent },
{ path: "testimonial", component: TestimonialComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes);