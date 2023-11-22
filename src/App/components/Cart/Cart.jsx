import { FaShoppingCart } from 'react-icons/fa';

export const Cart = ({ cart, setCart }) => {
	const handleIncreaseQuantity = index => {
		const newCart = [...cart];
		newCart[index].quantity += 1;
		setCart(newCart);
	};

	const handleDecreaseQuantity = index => {
		const newCart = [...cart];
		if (newCart[index].quantity > 1) {
			newCart[index].quantity -= 1;
			setCart(newCart);
		}
	};

	const handleDeleteItem = index => {
		const newCart = [...cart];
		newCart.splice(index, 1);
		setCart(newCart);
	};

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<>
			<div className='my-10 mx-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-2/3 pb-10 mb-20'>
				{cart.map((item, index) => (
					<div
						key={index}
						className='card mx-auto w-44 h-44 text-white bg-gray-400 shadow-lg rounded-lg overflow-hidden'>
						<div className='flex flex-col flex-wrap justify-center text-start'>
							<h3 className='text-2xl text-center'>{item.name.slice(0, 10)}</h3>
							<p className='pl-3'>{item.description.slice(0, 40)}</p>
							<p className='pl-3'>Price /u: {item.price}</p>
							<p className='pl-3'>
								Subtotal Price: {item.price * item.quantity}
							</p>
							<p className='pl-3 pb-3'>Quantity: {item.quantity}</p>
						</div>
						<div className='pb-3 card mx-auto max-w-md text-white bg-gray-400 shadow-lg rounded-lg overflow-hidden'>
							<button
								onClick={() => handleDecreaseQuantity(index)}
								className='ml-2 px-3 rounded-xl bg-slate-950'>
								-
							</button>
							<button
								onClick={() => handleIncreaseQuantity(index)}
								className='mx-1 px-3 rounded-xl bg-slate-950'>
								+
							</button>
							<button
								onClick={() => handleDeleteItem(index)}
								className='mr-2 px-3 rounded-xl bg-slate-950'>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			<div className='bg-teal-700 fixed bottom-0 w-screen text-xl text-white flex flex-row justify-around'>
				<p className='px-10'>Total Price: {totalPrice}</p>
				<h2 className='flex flex-row px-10'>
					<FaShoppingCart className='pt-2' />
					Cart Summary
				</h2>
				<p className='px-10'>Total Quantity: {totalQuantity}</p>
			</div>
		</>
	);
};
