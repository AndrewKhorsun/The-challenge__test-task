export type List = {
  id: number,
  label: string,
  parent_id: number,
  children?: List[]
}