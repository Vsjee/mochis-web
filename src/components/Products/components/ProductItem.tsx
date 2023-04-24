import type { IProduct } from '../interface/products.interface';
import './ProductItem.css';

interface Props {
  product: IProduct;
}

function ProductItem({ product }: Props) {
  return (
    <article className='product'>
      <img src={product.image} alt={product.name} title={product.name} className='product__img' />
      <h3 className='product__name'>{product.name}</h3>
    </article>
  );
}

export default ProductItem;
