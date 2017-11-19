import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { ToolbarComponent } from './components/toolbar.component';
import { AppComponent } from './containers/app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent, AppComponent]
})
export class CoreModule { }
