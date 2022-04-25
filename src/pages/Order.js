import React, { useEffect, useState, createRef, } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

export default function Order({ cart, removeFromCart, updateAmount, emptyCart }) {
	const [inputs, _] = useState([]);
	const [inputIndex, setInputIndex] = useState(-1);

	function changeAmount(e, product, index) {
		updateAmount(e.target.value, product);
		setInputIndex(index);
	}

	useEffect(() => {
		for (let i = 0; i < cart.length; i++) {
			inputs[i] = createRef();
		}
	}, [cart.length])

	useEffect(() => {
		if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
			inputs[inputIndex].current.focus();
		}
	}, [cart])


	let sum = 0;

	return (
		<div className="cart">
			<h3 className="header">Ostoskori</h3>
			<table className="table">
				<tbody>
					{cart.map((product, index) => {
						sum += parseFloat(product.price * product.amount);
						return (
							<tr key={uuid()}>
								<td>{product.name}</td>
								<td>{product.price} €</td>
								<td><input type="number" ref={inputs[index]} value={product.amount} onChange={e => changeAmount(e, product, index)} /></td>
								<td>Yhteensä: {product.price * product.amount} €</td>
								<td><a id="poista" href="#" onClick={() => removeFromCart(product)}>Poista</a></td>
								<td></td>
							</tr>
						)
					})}
					<tr key={uuid()}>
						<td></td>
						<td>{sum.toFixed(2)} €</td>
						<td><a id="tyhjenna" href="#" onClick={() => emptyCart()}>Tyhjennä Ostoskori</a></td>
						<td><Link to="/Checkout" id="checkout">Siirry kassalle</Link></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
