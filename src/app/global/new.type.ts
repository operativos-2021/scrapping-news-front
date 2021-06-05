import { Category } from "./category.type";

export interface NewType {
    article: string
    headline: string
    img: string
    percentages: Array<Category>
    time: string
    zCategory: string
}