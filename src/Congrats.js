import PropTypes from 'prop-types';

function Congrats(props) {
    if (props.success) {
        return(
            <div data-test="components-congrats">
                <div data-test="congrats-message">
                    Congratulations!! you guessed the word.
                </div>
            </div>
        );
    } else {
        return(
            <div data-test="components-congrats"></div>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;