import { useEffect, useState } from 'react';
import './App.css';
import { AddProductForm } from './components/AddProductForm';
import { Cart } from './components/Cart';

function App() {
	const [cart, setCart] = useState([
		{
			name: 'banana',
			description: 'Bananas por kg',
			price: 545,
			quantity: 3,
		},
		{
			name: 'naranja',
			description: 'Naranjas por docena',
			price: 388,
			quantity: 1,
		},
		{
			name: 'tomate',
			description: 'Tomates por kg',
			price: 650,
			quantity: 2,
		},
	]);

	useEffect(() => {
		let cart_b = localStorage.getItem('Cart');
		if (cart_b) {
			setCart(JSON.parse(cart_b));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('Cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<main className='bg-blue-950 h-screen container flex flex-row'>
			<AddProductForm cart={cart} setCart={cart} />
			<Cart cart={cart} setCart={setCart} />
		</main>
	);
}

export default App;
