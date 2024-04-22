import { ReactNode } from 'react'

export interface IStep {
  id: number
  name: string
  stepNumber: number
  icon: ReactNode
  hasError: boolean
  subActivitiesNumber: number
}
