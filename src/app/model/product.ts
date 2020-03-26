import { ProductMedia } from '.';

export interface Product {
  productId: number,
  title: string;
  description: string;
  media: ProductMedia[];
}
