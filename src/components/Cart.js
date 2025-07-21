
import { useSelector } from 'react-redux';
import ItemsList from './ItemsList';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items || []);
  return (
    <div className='w-6/12 m-auto'>
      <h1 className='text-xl font-bold text-center p-10'>Cart</h1>
      {cartItems.map((item, index) => (
        <ItemsList key={index} card={item} from={'cart'} />
      ))}
    </div>
  )
}

export default Cart