import React from 'react';

const Modal = ({ typeText }) => {
  typeText = 'cancel';
  const style = {
    // backgroundColor: 'yellow',
    maxWidth: '40%',
      borderRadius: '1.5rem',
    boxShadow:'0 2px 15px 0 rgba(0,0,0,0.2)'
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: '12px',
  };
  return (
    <div className='modal flex flex-column pad-1' style={style}>
      <button
        style={{
          alignSelf: 'flex-end',
          display: 'inlineBlock',
          width: '1.5rem',
          border: 'none',
          padding: '0.5rem',
          backgroundColor: 'white',
        }}>
        X
      </button>

      <p style={{ fontSize: '1.5rem', marginBlockEnd: '1rem',lineHeight:'30px' }}>
        Are you sure you want to {typeText} list
      </p>
      <div className='flex col-gap-1' style={{ justifyContent: 'flex-end' }}>
        <button className='pad-1 bg-white' style={buttonStyle}>
          Cancel
        </button>
        <button className='pad-1 bg-red clr-white ' style={buttonStyle}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Modal;
