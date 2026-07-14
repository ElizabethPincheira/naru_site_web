import type { CategoriaModel } from "./Categoria.model"


//Aquí estan las PROPIEDADES del objeto
export interface ProductModel {
    id: string
    nombre: string
    descripcion: string
    precio: number
    categoria:CategoriaModel
    image: string
    tamano: ProductSize
}

// Tipo que define los tamaños permitidos para un producto.
// Este tipo indica que un producto solo puede tener los tamaños S, M o L.
export type ProductSize = 'S' | 'M' | 'L'

