import { Button } from '@mui/material';

import AddCard from './AddCard';
import Complete from './Complete';
import EnterCategory from './EnterCategory';
import ItemCard from './ItemCard';
import ItemCard2 from './ItemCard2';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCancelOpen,
  setCompleteOpen,
  setModalClose,
} from '../../features/home/modalSlice';
import { saveAsComplete } from '../../features/history/completeSlice';
import { useParams } from 'react-router-dom';

const OperationCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const completeOpen = useSelector((state) => state.modal.completeOpen);
  const cancelOpen = useSelector((state) => state.modal.cancelOpen);
  const handleCompleteOpen = () => {
    dispatch(setCompleteOpen(true));
  };
  const handleCancellationOpen = () => {
    dispatch(setCancelOpen(true));
  };

  const handleComplete = () => {
    const id = params.id;
    const data = { id: id, progress: 'Completed' };
    dispatch(saveAsComplete(data));
    dispatch(setCompleteOpen(false));
  };

  const handleCancel = () => {
    const id = params.id;
    const data = { id: id, progress: 'Cancelled' };
    dispatch(saveAsComplete(data));
    dispatch(setCancelOpen(false));
  };

  return (
    <div className='operation-card flex flex-column space-between'>
      <Dialog
        sx={{ maxWidth: '30rem', marginInline: 'auto' }}
        open={completeOpen}
        onClose={() => dispatch(setModalClose())}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure that you want to complete this list?'}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button
            onClick={() => dispatch(setModalClose())}
            sx={{
              padding: '.75rem 1.3rem',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgb(239,239,240)',
              },
            }}>
            cancel
          </Button>
          <Button
            onClick={handleComplete}
            autoFocus
            sx={{
              padding: '.75rem 1.3rem',
              backgroundColor: '#56CCF2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#56a5f2',
              },
            }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        sx={{ maxWidth: '30rem', marginInline: 'auto' }}
        open={cancelOpen}
        onClose={'handleClose'}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure that you want to cancel this list?'}
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
            onClick={handleCancel}
            autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div className='make-sticky'>
        <AddCard />
        {/* <ItemCard /> */}
        <ItemCard2 />
      </div>
      {
        <>
          {window.location.href.includes('home') ? (
            <EnterCategory />
          ) : (
            <Complete
              onOpen={handleCompleteOpen}
              onCancellation={handleCancellationOpen}
            />
          )}
        </>
      }
    </div>
  );
};

export default OperationCard;
