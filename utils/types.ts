export type Project = {
  id: number
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: string[]
  title: string
  role: string
  description: string
  mySkills: string
  linkText: string
  link: string[]
  customers?: string
  linkProjectPage: string
}
