import { Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LayoutComponent, children: 
      [
        { path: '', component: ContentComponent },
        { path: 'products', component: ProductsComponent}
      ], canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'email', component: EmailComponent },
    { path: 'signup', component: SignupComponent }
  ]