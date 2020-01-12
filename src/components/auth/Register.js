import React from 'react';

export const Register = () => {
  return (
    <div>
      <form className='new-user' action='/'>
        <div className='names'>
          First Name: <input id='names_first' type='text' />
          Last Name: <input id='names_last' type='text' />
          Email: <input id='names_email' type='text' />
          Organization: <input id='names_org' type='text' />
        </div>

        <div className='interests'></div>
      </form>
    </div>
  );
};

const styles = {};
