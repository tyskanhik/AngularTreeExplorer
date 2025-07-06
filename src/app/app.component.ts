import { Component, signal } from '@angular/core';
import { TreeNodeComponent } from "./features/tree-node/tree-node.component";
import { TreeDataService } from './core/services/tree-data.service';
import { CommonModule } from '@angular/common';
import { TreeNodes, TreeNodeTemplateType } from './core/models/treeNodes.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  treeData = signal<TreeNodes[]>([])
  TreeNodeTemplateType = TreeNodeTemplateType
  allChildrenExpanded = signal<boolean>(false)

  constructor(private dataService: TreeDataService) {
    this.loadData();
  }

  loadData() {
    this.dataService.loadData().subscribe({
      next: (data: TreeNodes[]) => this.treeData.set(data)
    })
  }

  handleClick(nodeId: number) {
    console.log(`нажали на узел ID - ${nodeId}`)
  }
  
  toggleOpenAll() {
    this.allChildrenExpanded.update(value => !value)
  }
}
