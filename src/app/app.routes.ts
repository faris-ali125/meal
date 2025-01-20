import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BeakfastComponent } from './beakfast/beakfast.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'meals', component: MealsComponent, title: 'Meals', children: [
        {path: 'seafood', component: SeafoodComponent, title: 'Seafood'},
        { path: 'pasta', component: PastaComponent, title: 'Pasta' },
        { path: 'brakfast', component: BeakfastComponent, title: 'Breakfast' },
    ]},
    {path: 'team', component: TeamComponent, title: 'Team'},
    {path: 'contact', component: ContactComponent, title: 'Contact'},
    {path: '**', redirectTo: 'home'}
    

    
];
