const Header = () => {
  return (
    <header className='header flex space-between'>
      <h2>
        <span style={{ color: 'var(--clr-orange)' }}>Shoppingify </span> allow
        you to take your shopping list wherever you go
      </h2>
      <form>
        <div className='input-cont'>
          <span className='material-symbols-outlined search-icon'>search</span>
          <input type='text' placeholder='search item' />
        </div>
      </form>
    </header>
  );
};

export default Header;
