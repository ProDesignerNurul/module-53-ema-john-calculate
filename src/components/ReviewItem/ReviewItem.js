import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RiviewItem.css';

const ReviewItem = ({ product }) => {
    const { img, name, price, quantity } = product;
    return (
        <div className='riview-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-info'>
                <div>
                    <p>Name : {name}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Price : {price}</p>
                </div>
                <div className='delate-container'>
                    <button className='btn-delate'>
                        <FontAwesomeIcon className='delate-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;