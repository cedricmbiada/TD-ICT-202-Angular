import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './connection/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './connection/signin/signin.component';
import { FormationComponent } from './formation/formation.component';
import { LoisirComponent } from './loisir/loisir.component';
import { InformationComponent } from './information/information.component';
import { LangueComponent } from './langue/langue.component';
import { ExperienceComponent } from './experience/experience.component';
import { CompetenceComponent } from './competence/competence.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { 
    path: "home",
    component:HomeComponent,
    children : [
      {path: "formation", component:FormationComponent },
      {path: "langue", component:LangueComponent},
      {path: "information", component:InformationComponent},
      {path: "experience", component: ExperienceComponent},
      {path: "loisir", component: LoisirComponent},
      {path: "competence", component: CompetenceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
