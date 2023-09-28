import logo from '../../assets/logo.svg';

const Sidebar = () => {
  return (
    <div className='sidebar-bar  flex flex-column space-between wd100 align-items-center pb-2'>
      <picture>
        <img src={logo} />
      </picture>
      <div className='three-icons flex flex-column space-between'>
        <div>
          <span className='material-symbols-outlined'>
            format_list_bulleted
          </span>
        </div>
        <div>
          <span className='material-symbols-outlined'>replay</span>
        </div>
        <div>
          <span className='material-symbols-outlined'>insert_chart</span>
        </div>
      </div>
      <div className='clr-orange border-radius pad-05 flex place-items'>
        <span className='material-symbols-outlined cart  '>shopping_cart</span>
      </div>
    </div>
  );
};

export default Sidebar;
