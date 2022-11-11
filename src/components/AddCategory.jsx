import { useState } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
=======

export const AddCategory = ( { onNewCategory } ) => {
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // console.log(inputValue);
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ] );
<<<<<<< HEAD
        setInputValue('');
        onNewCategory( inputValue.trim() );
=======
        onNewCategory( inputValue.trim() );
        setInputValue('');
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d

    }

    return (

<<<<<<< HEAD
        <form onSubmit={ onSubmit } aria-label="form">
=======
        <form onSubmit={ onSubmit }>
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
            <input 
                type="text" 
                placeholder="Buscador de gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    );
}
<<<<<<< HEAD

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired,
}
=======
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
