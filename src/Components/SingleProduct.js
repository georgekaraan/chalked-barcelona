import './Shop.css'


const SingleProduct = ({ product }) => {
    return (<div className='prod-card' key={product.idx}>
        <img src={product.obj.image} alt={product.obj.product}></img>
        <p className='prod-name'>{product.obj.title.slice(0, 40) + '...'}</p>
        <p className='prod-price'>${product.obj.price}</p>
    </div>)
}

export default SingleProduct;
