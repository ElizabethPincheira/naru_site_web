import type { ProductModel } from "@/models/product.model"



//Mocks es información falsa para simular el backend.

export const productosMocks:ProductModel[] = [
    {
    id: "M001",
    nombre: "Macetero Minimalista",
    descripcion: "Macetero de cemento sellado 12x12 cm.",
    precio: 4990,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-01.webp",
    tamano: "S",
  },
  {
    id: "M002",
    nombre: "Macetero Minimalista",
    descripcion: "Macetero de cemento sellado 16x16 cm.",
    precio: 6990,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-02.webp",
    tamano: "M",
  },
  {
    id: "M003",
    nombre: "Macetero Minimalista",
    descripcion: "Macetero de cemento sellado 20x20 cm.",
    precio: 9990,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-03.webp",
    tamano: "L",
  },
  {
    id: "M004",
    nombre: "Macetero Cilíndrico",
    descripcion: "Macetero cilíndrico de cemento color gris natural.",
    precio: 6490,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-04.webp",
    tamano: "M",
  },
  {
    id: "M005",
    nombre: "Macetero Decorativo",
    descripcion: "Macetero con textura artesanal para interiores.",
    precio: 8990,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-05.webp",
    tamano: "L",
  },
  {
    id: "M006",
    nombre: "Macetero Mini",
    descripcion: "Ideal para cactus y suculentas.",
    precio: 2990,
    categoria: {
      id: "C001",
      nombre: "Maceteros",
    },
    image: "/images/macetero-06.webp",
    tamano: "S",
  },

];

