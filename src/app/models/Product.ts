import { CarExtension } from "./carExtension"

export class Product {

    id: number
    category_id: number
    user_id: number
    header: string
    description: string
    price: number
    state: number
    created_date: Date
    image_list: string[]
    category: string
    city_name: string
    car_extension: CarExtension 

}