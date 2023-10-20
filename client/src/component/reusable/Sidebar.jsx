import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';




const Sidebar = () => {
  const cart = useSelector((state) => state.cart);
  const visible = useSelector((state) => state.sidebar.visibility);
  console.log(visible)
  console.log(cart.length);
  return (
    <div className='sidebar-bar  flex flex-column space-between wd100 align-items-center pb-2'>
      <picture>
        <img src={logo} />
      </picture>
      <div className='three-icons flex flex-column space-between'>
        <NavLink to='/home'>
          <div>
            <Tooltip title='home'>
              <span className='material-symbols-outlined'>
                format_list_bulleted
              </span>
            </Tooltip>
          </div>
        </NavLink>
        <NavLink to='/history'>
          <div>
            <Tooltip title='history'>
              <span className='material-symbols-outlined'>replay</span>
            </Tooltip>
          </div>
        </NavLink>
        <NavLink to='/statistics'>
          <div>
            <Tooltip title='Statistics'>
              <span className='material-symbols-outlined'>insert_chart</span>
            </Tooltip>
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
        {cart.length > 0 ? (<span
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
        </span>) : null}
      </div>
    </div>
  );
};

export default Sidebar;
