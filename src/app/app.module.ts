import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { ArraysDragComponent } from './arrays-drag/arrays-drag.component';
import { CustomUseCaseComponent } from './custom-use-case/custom-use-case.component';
@NgModule({
  declarations: [AppComponent, SimpleDragComponent, ArraysDragComponent, CustomUseCaseComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
