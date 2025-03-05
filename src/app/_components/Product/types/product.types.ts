export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  createdAt: string;
}

export interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
}
