import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { NodeService } from './nodeservice';

@Component({
  template: `

  <h5>Checkbox</h5>
  <p-treeSelect  [options]="nodes3" display="chip" [metaKeySelection]="false"
      selectionMode="checkbox" placeholder="Select Item"></p-treeSelect>

    `,
})
export class ProductListDemo {
  products: Product[];

  nodes1: any[];

  nodes2: any[];

  nodes3: any[];

  selectedNodes1: any[] = [];

  selectedNodes2: any[] = [];

  selectedNode: any;

  constructor(
    private productService: ProductService,
    public nodeService: NodeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.nodes1 = files));
    this.nodeService.getFiles().then((files) => (this.nodes2 = files));
    this.nodeService.getFiles().then((files) => (this.nodes3 = files));

    this.productService
      .getProductsSmall()
      .then((products) => (this.products = products));
  }

  selectProduct(product: Product) {
    this.ref.close(product);
  }
}
