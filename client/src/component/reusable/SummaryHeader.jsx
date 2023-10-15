import React from 'react';

const SummaryHeader = ({createdAt,title}) => {
  return (
    <section>
          <h2>{title}</h2>
      <div>
        <p className='flex clr-grey'>
          <span className='material-symbols-outlined margin-right-1'>
            event_note
          </span>
          {createdAt}
        </p>
      </div>
    </section>
  );
};

export default SummaryHeader;
