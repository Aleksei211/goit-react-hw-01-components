import PropTypes from 'prop-types';
import s from '../transactions/Transactions.module.css'

export default function Transaction({ items }) {
    //const { type, amount, currency } = props;
    return (
        <table className={s.transaction}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(item => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>

                </tbody>
                 ))}
</table>
   

)
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}