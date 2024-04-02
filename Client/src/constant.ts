export const URL = "http://localhost:3001";

export interface Product {
    _id: string;
    title: string;
    description: string;
    image: string;
    categories: string[];
    color: string;
    price: number;
    comparePrice: number;
    review: number;
    reviewCount: number;
    bestSelling: boolean;
    __v: number;
    createdAt: string;
    updatedAt: string;
  }
  