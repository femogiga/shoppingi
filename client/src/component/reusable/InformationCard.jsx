import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setActiveCard } from '../../features/home/homeSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { add } from '../../features/home/cartSlice';
import { deleteProduct } from '../../features/home/deleteProductSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import {
  setCancelOpen,
  setCompleteOpen,
  setModalClose,
  setDeleteOpen,
} from '../../features/home/modalSlice';

const InformationCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoBack = (e) => {
    e.preventDefault();
    dispatch(setActiveCard('operationCard'));
    localStorage.setItem('activeCard', null);
  };

  const data = useSelector((state) => state.informationCard.data);
  const deleteOpen = useSelector((state) => state.modal.deleteOpen);
  // console.log('myData', data);
  const handleDeleteCard = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(data?.id));
    dispatch(setModalClose());
    window.location.reload();
  };

  const handleDeleteModalState = (e) => {
    e.preventDefault();
    dispatch(setDeleteOpen(true));
  };
  return (
    <div className='information-card pad-1 flex flex-column space-between row gap-2'>
      <Dialog
        sx={{ maxWidth: '30rem', marginInline: 'auto' }}
        open={deleteOpen}
        onClose={() => dispatch(setModalClose())}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure that you want to delete this item?'}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button
            sx={{
              padding: '.75rem 1.3rem',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgb(239,239,240)',
              },
            }}
            onClick={() => dispatch(setModalClose())}>
            cancel
          </Button>
          <Button
            sx={{
              padding: '.75rem 1.3rem',
              backgroundColor: '#EB5757',
              color: 'white',
              '&:hover': {
                backgroundColor: 'darkred',
              },
            }}
            onClick={handleDeleteCard}
            autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <Link className='font-orange' onClick={handleGoBack}>
          <span>&#8592;</span> back
        </Link>
      </div>

      <picture className='img-cont'>
        {/* <img src='https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' /> */}
        <img src={data?.imageUrl} />
      </picture>
      <div>
        <p className='clr-grey'>name</p>
        <p>{data?.product_name}</p>
      </div>
      <div>
        <p className='clr-grey'>category</p>
        <p>{data.category}</p>
      </div>
      <div>
        <p className='clr-grey'>notes</p>
        <p>
          {/* Nutrient dense food are those that provide substantial amounts of
          vitamin ,minerals and other nutrients with relatively few
          calories.One-third of a medium avocado(50g) has 80 calories and
          contributes nearly 20 vitamins and minerals , making it a great
          nutrient-dense food choice */}
          {data.note}
        </p>
      </div>
      <form className='flex justify-center col-gap-2'>
        {/* <button className='delete' onClick={handleDeleteCard}>
          delete
        </button> */}
        <button className='delete' onClick={handleDeleteModalState}>
          delete
        </button>
        <button
          className='add-to-list'
          onClick={(e) => {
            e.preventDefault();
            dispatch(add({ ...data, count: 1 }));
            dispatch(setActiveCard('operation'));
          }}>
          Add to list
        </button>
      </form>
    </div>
  );
};

export default InformationCard;
//
