import React from 'react';

function NewBeerForm() {

  let _name = null;
  let _brewery = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brewery.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
    _name.value = '';
    _brewery.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name' 
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery' 
          ref={(input) => {_brewery = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content' 
          ref={(input) => {_alcoholContent = input}}/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;