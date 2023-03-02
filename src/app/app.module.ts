import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TreeSelectModule } from 'primeng/treeselect';

import { AppComponent } from './app.component';
import { ProductListDemo } from './productlistdemo';
import { ProductService } from './productservice';

import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { NodeService } from './nodeservice';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    TreeSelectModule,
    FormsModule
  ],
  declarations: [AppComponent, ProductListDemo],
  bootstrap: [AppComponent],
  entryComponents: [ProductListDemo],
  providers: [ProductService, NodeService],
})
export class AppModule {}
