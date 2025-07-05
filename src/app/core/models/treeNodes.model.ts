export interface TreeNodes {
  id: number,
  title: string,
  isDeleted: boolean,
  children: TreeNodes[]
}