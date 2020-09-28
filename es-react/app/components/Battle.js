import React from 'react'
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/all";


function Instructions () {
    return (
        <div className='instruction__container'>
            <h1 className='instruction__header'>
                Instructions
            </h1>
            <ul className='instruction__list'>
                <li className='instruction__item'>
                    <h3 className='instruction__item-title'>
                        Enter two Github users
                    </h3>
                    <FaUserFriends className='bg-light' color='rbg(255, 191, 116)' size={140}/>
                </li>
                <li className='instruction__item'>
                    <h3 className='instruction__item-title'>
                        Battle
                    </h3>
                    <FaFighterJet className='bg-light' color='#727272' size={140}/>
                </li>
                <li className='instruction__item'>
                    <h3 className='instruction__item-title'>
                        Enter two Github users
                    </h3>
                    <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140}/>
                </li>
            </ul>
        </div>
    )
}

export default class Battle extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Instructions/>
            </React.Fragment>
        )
    }
}