import React from "react";
import { connect } from "react-redux";
import ProductTile from "./ProductTile/ProductTile"
import "./Shop.css";

import { addToCart } from "../../ducks/product";

export function Shop( { addToCart, products } ) {

	let productTiles = products.map((product) =>(
		<ProductTile
		addToCart={ () => addToCart( product.id ) }
		key={ product.id }
		logo={ product.logo }
		name={ product.name }
		price={ product.price }
	  />
	))

	return (
		<div className="shop">
			<h1 className="shop__header">Shop</h1>
			<div className="shop__products-wrapper">
				{productTiles}
			</div>
		</div>
	);
}

function mapStateToProps( { products } ) {
	return { products };
}
export default connect( mapStateToProps, { addToCart } )( Shop );
