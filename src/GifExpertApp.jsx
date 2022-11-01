import { useState } from 'react';

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch Man' ]);
    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        //* Agregar Categoría
        // categories.push( newCategory );
        /**
         * * .push() es utilizado para mutar el estado.
         * * React intenta no mutar el estado.
         * * Por ello utilizaremos nuestro setCategories de useState.
         */
        if( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories ] );
        // setCategories( cat => [ 'Valorant', ...cat ]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gif Items */}
            { 
                categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category } />
                ))
            }

        </>
    );
}
