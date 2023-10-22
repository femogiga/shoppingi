import React from 'react'

const Meter = ({product,stat}) => {

  const meterStyle = {
    width: '100%',
    height: '16px',
    //  backgroundColor: 'lightblue',
    color:'orange'
  }
  return (
    <article style={{width:'21rem'}} className='flow-1'>
      <div className='flex space-between'>
        <p>{product }</p>
        <p>{stat + '%'}</p>
      </div>
      <div>
        <meter style={meterStyle} min={'0'} max={'100'} value={stat || 0}></meter>
      </div>
    </article>
  );
}

export default Meter
