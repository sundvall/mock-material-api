import ProductPackage from './product-package.model';
export default interface Product {
  id: number;
  productId: string;
  productName: string;
  info: string;
  packages: ProductPackage[];
}
