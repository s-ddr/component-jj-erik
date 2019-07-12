import React, { Component } from 'react';
import axios from 'axios';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

import BreadCrumbs from './BreadCrumbs';
import ImageZoom from './ImageZoom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      mainImage: '',
      images: [],
      gallery: [],
      selectedColor: '',
      favorite: false,
      colors: [],
      showShippingOptions: false
    }

    this.fetchProduct = this.fetchProduct.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);

  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct() {
    // let id = Math.floor(Math.Random() * (100) + 1);
    axios
    .get('/api/product')
    .then(({data}) => {
      this.setState({ 
        product : data[0],
        mainImage: data[0].imageDefault,
        images: data[0].images,
        gallery: data[0].gallery,
        colors: data[0].colors
      });
    })
    .catch(err => console.error(err));
  }

  toggleFavorite(e) {
    this.setState({ favorite: !this.state.favorite });
  }

  favorite() {
    return (
      <span onClick={this.toggleFavorite} className="favorite"><FaHeart size={25} style={{color: 'red'}}/></span>
    )
  }

  unfavorite() {
    return (
      <span onClick={this.toggleFavorite} className="favorite"><FaRegHeart size={25} style={{color: 'red'}}/></span>
    )
  }

  render() {
    return (
      <div>
        <BreadCrumbs product={this.state.product}/>

        <div id="main">
          <div className="left">
            <div className="product-image">
              {this.state.favorite ? this.favorite() : this.unfavorite()}
              <ImageZoom productName={this.state.product.productName} smallImage={this.state.mainImage} largeImage={this.state.mainImage} className="zoom"/>
              <div className="image-tools">
                <a className="larger-text">View Larger</a>
                <span className="zoom-text"> Roll Over Image To Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
  }
}