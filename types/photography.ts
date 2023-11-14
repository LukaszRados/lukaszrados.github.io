export type PhotographyItem = {
  readonly url: string
  readonly width: number
  readonly height: number
}

export type PhotographyCategory = {
  readonly background: string
  readonly title_en: string
  readonly title_pl: string
  readonly order: number
  readonly photos: PhotographyItem[]
  readonly _path: string
}
