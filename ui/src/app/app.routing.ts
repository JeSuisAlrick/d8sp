import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HomeComponent } from "./content/home/home.component";
import { ContactComponent } from "./content/contact/contact.component";
import {NotFoundComponent} from "./content/notfound/notfound.component";
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
