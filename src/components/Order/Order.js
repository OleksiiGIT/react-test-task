import React from 'react'
import list_icon from "../../img/list_icon.svg";
import delete_icon from "../../img/delete.png";

const Order = props => {

    //Получаем цену прихода
    const sum = props.products.reduce((acc, prod) => {
        return prod.order === props.id ?
            {
                usd: acc.usd + prod.price[0].value,
                uah: acc.uah + prod.price[1].value
            }
            :
            {
                usd: acc.usd,
                uah: acc.uah
            }
    }, {usd: 0, uah: 0})

    //Получаем отдельно время и дату
    const date_arr = props.date.split(' ')

    //Вычисляем количество продуктов у каждого заказа
    let prod_per_order = 0
    props.products.map(prod => { if (prod.order === props.id) prod_per_order++ })

    return (
        <div className={`orderItem ${props.activeOrderInfo.id === props.id? 'active' : ' '}`} key={props.id} >
            <div className='orderItemTitle'>{props.title}</div>
            <div className='orderItemInfo'>
                <div className='orderItemInfoProducts' onClick={props.loadProductsById.bind(this, [props.id, props.title])}>
                    <div className='orderItemInfoProductsImg'>
                        <img src={list_icon} alt="placeholder+image"/>
                    </div>
                    <div className='orderItemInfoProductsDesc'>
                        <p>{prod_per_order}</p>
                        <p>Продукта</p>
                    </div>
                </div>
                <div className='orderItemInfoDate'>
                    <div className='orderTopSet'>{date_arr[1]}</div>
                    <div className='orderBottomSet'>{date_arr[0].replace(/\-/g,'/')}</div>
                </div>
                <div className='orderItemInfoPrice'>
                    <div className='orderTopSet'>{sum.usd}$</div>
                    <div className='orderBottomSet'>{sum.uah} <p>uah</p></div>
                </div>
                <div className='orderItemInfoDelete' onClick={props.renderPopupDelete.bind(this, props.id)}>
                    <img src={delete_icon} alt="placeholder+image" />
                </div>
            </div>
            {props.showProducts ? <div className="activeArrow"></div> : null}
        </div>
    )
}

export default Order