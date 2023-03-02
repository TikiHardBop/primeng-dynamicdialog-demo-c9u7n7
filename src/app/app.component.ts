import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductListDemo } from './productlistdemo';
import { Product } from './product';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { NodeService } from './nodeservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DialogService, MessageService],
})
export class AppComponent {
  constructor(
    public dialogService: DialogService,
    public nodeService: NodeService,
    public messageService: MessageService
  ) {}

  ref: DynamicDialogRef;

  nodes1: any[];

  nodes2: any[];

  nodes3: any[];

  selectedNodes1: any[] = [];

  selectedNodes2: any[] = [];

  selectedNode: any;

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.nodes1 = files));
    this.nodeService.getFiles().then((files) => (this.nodes2 = files));
    this.nodeService.getFiles().then((files) => (this.nodes3 = files));

  }
  
  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Choose a Product',
      width: '90%',
      contentStyle: { 'max-height': '900px', overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: product.name,
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
