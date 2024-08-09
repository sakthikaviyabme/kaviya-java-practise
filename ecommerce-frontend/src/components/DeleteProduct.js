import React from 'react';
import axiosInstance from '../axiosConfig';

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      brand: '',
      price: '',
      category: '',
      stockQuantity: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axiosInstance.get(`/product/${id}`)
      .then(response => {
        this.setState({ ...response.data });
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    axiosInstance.put(`/product/${id}`, this.state)
      .then(response => {
        this.props.history.push(`/product/${id}`);
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
      });
  };

  render() {
    return (
      <div>
        <h1>Update Product</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
          <input name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" />
          <input name="brand" value={this.state.brand} onChange={this.handleChange} placeholder="Brand" />
          <input name="price" value={this.state.price} onChange={this.handleChange} placeholder="Price" />
          <input name="category" value={this.state.category} onChange={this.handleChange} placeholder="Category" />
          <input name="stockQuantity" value={this.state.stockQuantity} onChange={this.handleChange} placeholder="Stock Quantity" />
          <button type="submit">Update Product</button>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
