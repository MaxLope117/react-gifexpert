<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );

<<<<<<< HEAD
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
=======
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
}