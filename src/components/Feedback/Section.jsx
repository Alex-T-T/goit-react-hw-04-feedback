import PropTypes from 'prop-types';
import css from './Feedback.module.css'


export const Section = ({ title, children }) => {
    return <section className={css.counter}>
        <h2 className={css.counterTitle}>{title}</h2>
        {children}
    </section>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    
}