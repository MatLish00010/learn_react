import React from 'react'
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/all";
import PropTypes from 'prop-types'



function Instructions() {
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

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    handleChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form className='battle__form' onSubmit={this.handleSubmit}>
                <label htmlFor='username' className='battle__form-label'>
                    {this.props.label}
                </label>
                <div className='battle__form-content'>
                    <input
                    type='text'
                    id='username'
                    className='battle__form-input'
                    placeholder='github username'
                    autoComplete='off'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </div>
                <button
                className='battle__form-btn'
                type='submit'
                disabled={!this.state.username}
                >
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.protoTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: null,
            playerTwo: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (id, player) {
        this.setState({
            [id]: player
        })
    }

    render() {
        const {playerOne,playerTwo} = this.state
        return (
            <React.Fragment>
                <Instructions/>

                {/*<PlayerInput label="Label!" onSubmit={(value)=>  console.log('value!!', value)}/>*/}

                <div className='players'>
                    <h1 className='players__header'>Players</h1>
                    <div className='players__wrap'>
                        {playerOne === null && (
                            <PlayerInput
                            label='Player One'
                            onSubmit = {(player)=> this.handleSubmit('playerOne', player)}
                            />
                        )}
                        {playerTwo === null && (
                            <PlayerInput
                                label='Player Two'
                                onSubmit = {(player)=> this.handleSubmit('playerTwo', player)}
                            />
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}