import { FaShoppingCart } from 'react-icons/fa';

export const CartSummary = ({ cart }) => {
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<div className='bg-teal-700 fixed bottom-0 w-screen text-xl text-white flex flex-row justify-around'>
			<p className='px-10'>Total Price: {totalPrice}</p>
			<h2 className='flex flex-row px-10'>
				<FaShoppingCart className='pt-2' />
				Cart Summary
			</h2>
			<p className='px-10'>Total Quantity: {totalQuantity}</p>
		</div>
	);
};
