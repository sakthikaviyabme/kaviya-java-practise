import React from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axiosInstance.get('/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                {product.name} - {product.price} INR
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/add-product">Add New Product</Link>
      </div>
    );
  }
}

export default ProductList;
