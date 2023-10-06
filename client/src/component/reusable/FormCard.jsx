import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  resetForm,
  updateFormField,
  saveProduct,
} from '../../features/home/formSlice';
import { fetchCategory } from '../../features/home/AllCategorySlice';

const FormCard = () => {
  const imageUrl = useSelector((state) => state.formCard.imageUrl);
  const product_name = useSelector((state) => state.formCard.product_name);
  const note = useSelector((state) => state.formCard.note);
  const category_name = useSelector((state) => state.formCard.category_name);
  const data = useSelector((state) => state.formCard);
  const categoryArray = useSelector((state) => state.allCategory.data);
  console.log('cat',categoryArray)
  const dispatch = useDispatch();
  console.log('categories',data);


  useEffect(() => {
  dispatch(fetchCategory())
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      saveProduct({
        product_name: product_name,
        category_name: category_name,
        note: note,
        imageUrl: imageUrl,
      })
    );
  };
console.log(categoryArray)
  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(
      updateFormField({ fieldName: e.target.name, value: e.target.value })
    );
  };
  return (
    <form className='form-card flex flex-column space-between pad-2 '>
      <p className='top-title'>Add a new Item</p>
      <fieldset>
        <label>Name</label>
        <input
          type='text'
          name='product_name'
          className='input-width'
          value={product_name}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset>
        <label>Note(optional)</label>
        <textarea
          type='text'
          name='note'
          placeholder='Enter a note'
          value={note}
          onChange={handleInputChange}></textarea>
      </fieldset>
      <fieldset>
        <label>Image</label>
        <input
          type='url'
          name='imageUrl'
          placeholder='Enter a url'
          className='input-width'
          value={imageUrl}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <label>Category</label>
        <input
          id='category_name'
          placeholder='Enter a category'
          list='category-list'
          className='input-width'
          name='category_name'
          onChange={handleInputChange}
        />
        <datalist id='category-list'>
          {/* <option value='1'>Fruits and Vegetables</option>
          <option value='Meat and Fish'></option>
          <option value='Beverages'></option>
          <option value='Pets'></option>
          <option value='Vanilla'></option> */}
          {
            categoryArray.map(option => (<option key={option.id} value={option.category_name}>{option.category_name }</option>))
          }
        </datalist>
      </fieldset>
      <fieldset className='flex justify-center col-gap-2'>
        <button className='cancel'>cancel</button>
        <button className='save clr-orange' onClick={handleSubmit}>
          Save
        </button>
      </fieldset>
    </form>
  );
};

export default FormCard;
