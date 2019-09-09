import React from 'react';

function NewBeerForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name' />
        <input
          type='text'
          id='brewery'
          placeholder='Brewery' />
        <input
          type='number'
          id='price'
          placeholder='Price' />
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;