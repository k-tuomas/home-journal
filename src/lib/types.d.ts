export type House = {
  id: number
  createdAt: Date
  updatedAt: Date 
  name: string
  user: User[]
}

export type Profile = {
  id: number
  createdAt: Date
  updatedAt: Date 
  about?: string
  userId: string
}

export type User = {
  id: number
  createdAt: Date
  updatedAt: Date 
  email: string
  username?: string  
  houseId?: number
  profileId?: number
}