import React from 'react'
import delete_icon from "../../img/delete.png"

const Product = props => {

    const date_arr = !props.shortVersion ? props.date.split(' ') : ''

    return (
        <div className='productItemCover'>
            <div className='productItem'>
                <div className={`status ${props.status === 1 ? 'free' : ''}`}/>
                <img src={props.img} alt="placeholder+image" />
                <div className='mainInfo'>
                    <h5>{props.title}</h5>
                    <p>{props.serialNumber}</p>
                </div>
                <div className={`statusText ${props.status === 1 ? 'free' : '' }`}>
                    {props.status === 1 ? 'Свободен' : 'В ремонте'}
                </div>

                { !props.shortVersion ?

                    <React.Fragment>
                        <div className="guarantee">
                            <p><span>с</span>{props.guarantee.start}</p>
                            <p><span>по</span>{props.guarantee.end}</p>
                        </div>
                        <p className='isNew'>
                            {props.isNew === 1 ? 'новый' : 'Б/У'}
                        </p>
                        <div className='orderItemInfoPrice'>
                            <div className='orderTopSet'>{props.price[0].value}$</div>
                            <div className='orderBottomSet'>{props.price[1].value}<p>uah</p></div>
                        </div>
                        <div className="textWithLine">{props.orderName}</div>
                        <div className="textWithLine">{props.specification}</div>
                        <div className='orderItemInfoDate'>
                            <div className='orderTopSet'>{date_arr[1]}</div>
                            <div className='orderBottomSet'>{date_arr[0].replace(/\-/g,'/')}</div>
                        </div>
                    </React.Fragment>
                    : '' }

                <div className='deleteProd'>
                    <img src={delete_icon} alt="placeholder+image" />
                </div>
            </div>
        </div>
    )
}

export default Product