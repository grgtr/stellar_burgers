import PropTypes from 'prop-types';
import { dataPropTypes } from '../../data-types/dataPropTypes';
import styles from './burger-ingredients-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";

function BurgerIngredientItem({ item, count }) {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <>
            <li className={`${styles.card} mt-6 mb-8 ml-3 mr-2`} onClick={() => openModal()}>
                <img className={`${styles.image} ml-4 mr-4 mb-1`} src={item.image} alt={item.name} />
                <div className={`${styles.price} mb-1`}>
                    <span className="text text_type_digits-default mr-2">{item.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${styles.title} text text_type_main-default`}>{item.name}</div>
                {count && count > 0 ? <Counter count={count} size="default" extraClass={styles.count} /> : undefined}
            </li>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <IngredientDetails
                        item={item}
                     onClose={closeModal}
                    />
                </Modal>
            )}
        </>
    );
}

BurgerIngredientItem.propTypes = {
    item: dataPropTypes.isRequired,
    count: PropTypes.number
}

export default BurgerIngredientItem;