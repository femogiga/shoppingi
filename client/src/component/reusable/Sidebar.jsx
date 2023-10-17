import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.length);
  return (
    <div className='sidebar-bar  flex flex-column space-between wd100 align-items-center pb-2'>
      <picture>
        <img src={logo} />
      </picture>
      <div className='three-icons flex flex-column space-between'>
        <NavLink to='/home'>
          <div>
            <span className='material-symbols-outlined'>
              format_list_bulleted
            </span>
          </div>
        </NavLink>
        <NavLink to='/history'>
          <div>
            <span className='material-symbols-outlined'>replay</span>
          </div>
        </NavLink>
        <NavLink to='/statistics'>
          <div>
            <span className='material-symbols-outlined'>insert_chart</span>
          </div>
        </NavLink>
      </div>
      <div
        className='clr-orange border-radius pad-05 flex place-items'
        style={{ position: 'relative' }}>
        <span
          className='material-symbols-outlined cart '
          style={{ color: 'white' }}>
          shopping_cart
        </span>
        <span
          className='bg-red'
          style={{
            backgroundColor: 'red',
            padding: '.2rem .4rem',
            fontSize: '.5rem',
            color: 'white',
            position: 'absolute',
            top: '-.4rem',
            right: 0,
            borderRadius: '.2rem',
          }}>
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
