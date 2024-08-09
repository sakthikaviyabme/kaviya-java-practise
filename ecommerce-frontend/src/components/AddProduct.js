import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      image: null, // to store the file
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form data
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);

    // Append the file
    formData.append('image', this.state.image);

    // Send the request using Axios
    axios.post('http://localhost:8080/api/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log('Product added successfully:', response.data);
      })
      .catch((error) => {
        console.error('There was an error adding the product!', error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          onChange={this.handleInputChange}
        />
        <input
          type="file"
          name="image"
          onChange={this.handleFileChange}
        />
        <button type="submit">Add Product</button>
      </form>
    );
  }
}

export default AddProduct;
