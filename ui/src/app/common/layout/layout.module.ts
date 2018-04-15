import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainNavComponent} from './mainnav/mainnav.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LayoutComponent, 
        HeaderComponent, 
        FooterComponent, 
        MainNavComponent
    ],
    exports: [
        LayoutComponent, 
        HeaderComponent, 
        FooterComponent, 
        MainNavComponent
    ]
})
export class LayoutModule {}
