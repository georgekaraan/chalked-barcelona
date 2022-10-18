import "./Shop.css";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
// import ProductPage from './ProductPage';

const ProductsList = ({ list }) => {
  // let navigate = useNavigate();

  return (
    <div className="main">
      <h1>Our Products</h1>
      <div className="prods">
        {list.map((obj, idx) => (
          <Link to={`/shop/${obj.id}/${obj.title}`}>
            <SingleProduct product={{ obj, idx }} key={idx} />
          </Link>
        ))}
      </div>
      {/* <h1>Bestsellers</h1>
            <div className="prods best-sellers">
                {list.filter((el) => el.bestSeller === true).map((obj, idx) => (<SingleProduct product={{ obj, idx }} key={idx} />))}
            </div> */}
    </div>
  );
};

export default ProductsList;
