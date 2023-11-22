import { useEffect, useState } from 'react';
import './App.css';
import { AddProductForm } from './components/AddProductForm';
import { Cart } from './components/Cart';

function App() {
	const [cart, setCart] = useState([
		{
			name: 'Banana',
			description: 'Bananas por kg',
			price: 545,
			quantity: 3,
		},
		{
			name: 'Naranja',
			description: 'Naranjas por docena',
			price: 388,
			quantity: 1,
		},
		{
			name: 'Tomate',
			description: 'Tomates por kg',
			price: 650,
			quantity: 2,
		},
		{
			name: 'Limon',
			description: 'Limones por docena',
			price: 300,
			quantity: 2,
		},
		{
			name: 'Manzana',
			description: 'Manzanas por kg',
			price: 500,
			quantity: 2,
		},
		{
			name: 'Morrón',
			description: 'Morrones por kg',
			price: 800,
			quantity: 2,
		},
		{
			name: 'Carbón',
			description: 'Bolsas de carbón por kg',
			price: 900,
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
			<AddProductForm cart={cart} setCart={setCart} />
			<Cart cart={cart} setCart={setCart} />
		</main>
	);
}

export default App;
