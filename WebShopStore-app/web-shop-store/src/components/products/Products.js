import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../page/Spinner';
import { object } from 'prop-types';

class Products extends Component {
    state = {
        products: [],
        pageOfItems: []
    };

    componentWillMount() {
        var fakeProducts = [
            {
                "picture": "https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg",
                "name": "World graphics day",
                "price": "1020",
                "sizes": [
                    "320px"
                ]
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            },
            {
                "picture": "https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",
                "name": "Figma",
                sizes: [
                    "720px",
                    "1040px"
                ],
                "price": "300"
            }];





        this.setState({ products: fakeProducts });

    }

    onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

    render() {
        console.log(this.props, "sdfdsfsdf");
        const { products } = this.state;
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

export default connect(mapStateToProps)(Products);
