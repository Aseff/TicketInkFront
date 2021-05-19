import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { LogoutOutline } from '@ant-design/icons-angular/icons';

import { WelcomeComponent } from './welcome.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import {NgZorroAntdModule}  from 'ng-zorro-antd';
const icons: IconDefinition[] = [ LogoutOutline];

@NgModule({
  imports: [
    WelcomeRoutingModule, 
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule, 
    NzIconModule.forRoot(icons)],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]

})
export class WelcomeModule { }
