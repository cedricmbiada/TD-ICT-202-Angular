import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SigninComponent } from './connection/signin/signin.component';
import { SignupComponent } from './connection/signup/signup.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ConnectionComponent } from './connection/connection.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider';
import { LangueComponent } from './langue/langue.component';
import { LoisirComponent } from './loisir/loisir.component';
import { CompetenceComponent } from './competence/competence.component';
import { InformationComponent } from './information/information.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component'; 
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LangueComponent,
    LoisirComponent,
    CompetenceComponent,
    InformationComponent,
    FormationComponent,
    ExperienceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatTreeModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
