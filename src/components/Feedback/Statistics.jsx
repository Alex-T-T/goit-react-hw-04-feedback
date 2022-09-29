import PropTypes from 'prop-types';
// import { Notification } from './Notification';
import css from './Feedback.module.css'


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <div className={css.counterResults}>
                <div className={css.counterResultsPositions}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                </div>
                    <p>Total: {total}</p>
                    <p className={css.positive}>Positive feedback: {!positivePercentage ? 0 : positivePercentage } %</p>
            </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


