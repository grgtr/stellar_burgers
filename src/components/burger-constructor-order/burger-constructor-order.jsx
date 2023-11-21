import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor-order.module.css';
import OrderDetails from '../order-details/order-details';
import { useModal } from "../../hooks/useModal";


function BurgerConstructorOrder({ sum, number }) {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={`${styles.total} mr-4 mt-10`}>
            <div className="text text_type_digits-medium mr-2 mb-1">{sum}</div>
            <div className={`${styles['total-icon']} mr-10`}><CurrencyIcon type="primary" /></div>
            <Button htmlType="button" type="primary" onClick={() => openModal()}>Оформить заказ</Button>
            {isModalOpen && <OrderDetails number={number} onClose={closeModal} />}
        </div>
    );
}

BurgerConstructorOrder.propTypes = {
    sum: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired
}

export default BurgerConstructorOrder;