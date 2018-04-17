import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {ROUTING} from './app.routing'

import {AppComponent} from './app.component';
import {HomeComponent} from './content/home/home.component';
import {ContactComponent} from './content/contact/contact.component';
import {NotFoundComponent} from './content/notfound/notfound.component';
import {LayoutModule} from "./common/layout/layout.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        LayoutModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        ROUTING
    ],
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
