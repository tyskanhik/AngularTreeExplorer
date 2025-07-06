import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { TreeNodes, TreeNodeTemplateType } from '../../core/models/treeNodes.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss'
})
export class TreeNodeComponent {
  @Input({ required: true }) node!: TreeNodes
  @Input() templateType: TreeNodeTemplateType = TreeNodeTemplateType.First
  @Input() allChildrenExpanded = false
  @Output() nodeClicked = new EventEmitter<number>()

  isExpanded = signal(false)

  ngOnChanges() { 
    if (this.templateType === 'second') {
      this.isExpanded.set(this.allChildrenExpanded)
    }
  }

  viewId(event: Event, nodeId: number) {
    event.stopPropagation()
    this.nodeClicked.emit(nodeId)
  }

  toggleExpand(event: Event) {
    event.stopPropagation()
    if (this.node.children.length) {
      this.isExpanded.update(value => !value)
    }
  }
}