import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { RestaurantNavbar } from '../components/RestaurantNavbar';

export default function RestaurantMenu() {
	return (
		<>
			<Navbar />
			<div className='bg-white w-[100%] rounded p-3 shadow'>
				<RestaurantNavbar />
				<Menu />
			</div>
		</>
	);
}
