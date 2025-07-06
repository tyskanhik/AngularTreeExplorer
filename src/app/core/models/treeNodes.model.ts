export interface TreeNodes {
  id: number,
  title: string,
  is_deleted: boolean,
  children: TreeNodes[]
}

export enum TreeNodeTemplateType {
  First = 'first',
  Second = 'second'
}