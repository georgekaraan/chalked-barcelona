import './Shop.css';
import Search from './Search';
import ProductsList from './ProductsList';

function Shop({ products = [] }) {

  return (
    <>
      <Search />
      <ProductsList list={products} />
    </>
  );
}

export default Shop;
