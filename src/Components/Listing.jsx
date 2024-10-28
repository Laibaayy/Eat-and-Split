import React from 'react'


const Listing = (props) => {

    const selectbtn = () => {
        props.handleselectedfrnd(props.item);
        props.setcalculatingammount(props.item)
    }

    const isSelected = props.item.id === props.selectedfrnd?.id

    return (
        <div>
            <ul>
                <div>
                </div>
                <li className={isSelected ? 'pink' : ''}><img src={props.item.image} alt="" />
                    <div className='side'>
                        <p>{props.item.Name} </p>
                        <p>{props.item.price} </p>
                        <p>{props.item.price === 0 && <p className='black'>You and ${props.item.Name} are even </p>}</p>
                        <p>{props.item.price > 0 && <p className='green'>${props.item.Name} owes you ${props.item.price}</p>}</p>
                        <p>{props.item.price < 0 && <p className='red'>you owe ${props.item.price} to  ${props.item.Name} </p>}</p>
                        {/* <button onClick={selectbtn} >{isSelected ? "Close" : "Select"}</button> */}
                        <button className='button' onClick={selectbtn} >{isSelected ? "Close" : "Select"}</button>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Listing
