import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './guards/auth.guard';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    LoginComponent,
    LayoutComponent,
    ProductsComponent,
    LoaderComponent,
    SignupComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
