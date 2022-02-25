import { ReactNode } from "react";

export interface Branch {
    name: string
}

export interface Item {
    name: string
    description: string
    price: string
}

export interface Tag {
    name: string
    image: string
}

export interface Brand {
    name: string
    logo: string
    description: string
    branches: Branch[]
    items: Item[]
    tags: Tag[]
    children?: ReactNode
}