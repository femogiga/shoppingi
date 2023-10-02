const FormCard = () => {
  return (
    <form className='form-card flex flex-column space-between pad-2 '>
      <p className='top-title'>Add a new Item</p>
      <fieldset>
        <label>Name</label>
        <input type='text' name='name' className='input-width' />
      </fieldset>
      <fieldset>
        <label>Note(optional)</label>
        <textarea type='text' name='name' placeholder='Enter a note'></textarea>
      </fieldset>
      <fieldset>
        <label>Image</label>
        <input
          type='url'
          name='url'
          placeholder='Enter a url'
          className='input-width'
        />
      </fieldset>
      <fieldset>
        <label>Category</label>
        <input
          type='text'
          name='url'
          placeholder='Enter a category'
          className='input-width'
        />
      </fieldset>
      <fieldset>
        <label>Category</label>
        <input
          id='category'
          placeholder='Enter a category'
          list='category-list'
          className='input-width'
        />
        <datalist id='category-list'>
          <option value='Chocolate'></option>
          <option value='Coconut'></option>
          <option value='Mint'></option>
          <option value='Strawberry'></option>
          <option value='Vanilla'></option>
        </datalist>
      </fieldset>
      <fieldset className='flex justify-center col-gap-2'>
        <button className='cancel'>cancel</button>
        <button className='save clr-orange'>Save</button>
      </fieldset>
    </form>
  );
};

export default FormCard;
