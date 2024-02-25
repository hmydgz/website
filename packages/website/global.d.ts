import { FC } from 'react'

declare global {
  export type FCC<P = {}> = FC<ComponentType<P>>

  export type ComponentType<P = {}> = {
    className?: string
    children?: React.ReactNode
  } & P
}

export {}