import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css'

export default function Statistics(props) {
    
const { label, percentage, id } = props

    return (
    <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}</span>
    </li>
    )
  
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

