import React from 'react';
import axiosInstance from '../axiosConfig';
import { withRouter } from '../withRouter'; // Importing withRouter utility

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params; // Accessing params from props
    axiosInstance.get(`/product/${id}`)
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }

  render() {
    const { product } = this.state;
    if (!product) return <div>Loading...</div>;

    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: {product.price} INR</p>
        <p>Category: {product.category}</p>
        <p>Stock Quantity: {product.stockQuantity}</p>
        <button onClick={() => this.props.navigate(`/update-product/${product.id}`)}>Update Product</button>
        <button onClick={() => this.props.navigate(`/delete-product/${product.id}`)}>Delete Product</button>
      </div>
    );
  }
}

export default withRouter(ProductDetails);
