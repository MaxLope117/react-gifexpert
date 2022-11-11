<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d

export const GifItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );

}
<<<<<<< HEAD

GifItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
}
=======
>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
