import { useState } from 'react';

export const AddProductForm = ({ cart, setCart }) => {
	const [newProductForm, setNewProductForm] = useState({
		newProductName: '',
		newProductDescription: '',
		newProductPrice: '',
	});

	function onInputChange(e) {
		const { name, value } = e.target; // Destructuramos el target para identificar que target fue el que cambio
		setNewProductForm({
			...newProductForm,
			[name]: value, // le cambiamos el valor al target que tuvo cambios.
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newProduct = {
			name: newProductForm.newProductName,
			description: newProductForm.newProductDescription,
			price: parseFloat(newProductForm.newProductPrice),
			quantity: 1,
		};

		if (!newProduct.name || !newProduct.price) {
			alert('Por favor llene los campos necesarios para agregar al carrito.');
			return;
		}

		setCart([...cart, newProduct]);
		setNewProductForm({
			newProductName: '',
			newProductDescription: '',
			newProductPrice: '',
		});
	}

	return (
		<form
			onSubmit={e => handleSubmit(e)}
			className='flex flex-col justify-center sm:w-8/12 md:w-4/12 lg:w-4/12 xl:w-3/12 h-96 p-10'>
			<h1 className='text-white text-3xl py-10'>Cargar producto</h1>
			<br />
			<input
				type='text'
				id='newProductName'
				name='newProductName'
				value={newProductForm.newProductName}
				onChange={e => onInputChange(e)}
				className='w-auto'
			/>
			<label htmlFor='newProductName' className='text-white'>
				Nombre del producto
			</label>
			<br />
			<input
				type='text'
				id='newProductDescription'
				name='newProductDescription'
				value={newProductForm.newProductDescription}
				onChange={e => onInputChange(e)}
				className='w-auto'
			/>
			<label htmlFor='newProductDescription' className='text-white'>
				Descripción (Opcional)
			</label>
			<br />
			<input
				type='number'
				id='newProductPrice'
				name='newProductPrice'
				value={newProductForm.newProductPrice}
				onChange={e => onInputChange(e)}
				className='w-auto'
			/>
			<label htmlFor='newProductPrice' className='text-white'>
				Precio
			</label>
			<br />
			<button className='w-auto text-white text-center rounded-xl bg-slate-950'>
				Añadir al carrito
			</button>
		</form>
	);
};
