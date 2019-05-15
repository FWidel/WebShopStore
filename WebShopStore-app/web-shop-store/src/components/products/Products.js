import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addProducts } from '../../redux/actions/productsAction'

import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../page/Spinner';
import fakeProducts from './fakeProduct';
class Products extends Component {
    state = {
        pageOfItems: []
    };

    componentDidMount() {
        const { addProducts } = this.props;
        addProducts(fakeProducts);
    }

    onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

    render() {

        const { products } = this.props.products;
        const {sort } = this.props;

        console.log(this.props, "props")
        console.log(sort, "state")
        if (products.length > 0) {
            return (
                <div className="products-wrapper">
                    <div className="container">
                        <div className="row">
                            {this.state.pageOfItems.map(product => (
                                <Product product={product} key={product.id} />
                            ))}
                            <Pagination items={products} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Spinner />;
        }
    }
}



const mapStateToProps = state => ({
    products: state.products
});

export default connect(
mapStateToProps,
{addProducts})
(Products);
