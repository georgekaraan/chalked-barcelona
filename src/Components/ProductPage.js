import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import './ProductPage.css'

export default function ProductPage({ products, setCartDB, cartDB }) {

    let params = useParams();

    // const [product, setProduct] = useState();

    // // setProduct(() => products[products.findIndex((prod) => prod.id === params.id)])

    // setProduct(products[0])


    let product = products[params.id - 1]
    let id = Number(params.id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const addQuant = (prod, checkID) => {
        let index = cartDB.findIndex((p) => p['id'] === checkID)
        cartDB.length === 0
            ? setCartDB([{ ...prod, quantity: 1 }])
            : index === -1
                ? setCartDB([...cartDB, { ...prod, quantity: 1 }])
                : setCartDB([...cartDB.slice(0, index), { ...prod, quantity: cartDB[index].quantity + 1 }, ...cartDB.slice(index + 1, cartDB.length)])
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <div className='single-prod'>
                <img className='single-prod-img' src={product.image} alt="" />
                <div>
                    <h4 className='prod-desc'>{product.description}</h4>

                    <h5>${product.price}</h5>
                    <Rating className='rating'
                        initialRating={product.rating.rate}
                        readonly
                    />
                    <span className='rating-count'>{product.rating.count}</span>
                    <button className='add-cart' onClick={() => addQuant(product, id)}>Add to Cart</button>
                </div>
            </div >
        </div>
    )
}
