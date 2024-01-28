export type ItemType = {
  id: number
  name: string
}

export type ItemsResponseType = {
  result: number
  pages: number
  page: number
  items: ItemType[]
}

export type SingleItemType = {
  result: number
  name: string
  text: string
}