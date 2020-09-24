import React from 'react'

export default class Popular extends React.Component {
    render() {
        const languages = ['All', 'JavaScript', 'Java', 'Css', 'Python']
        return (
            <ul className='nav'>
                {languages.map((item) => (
                    <li key={item} className='nav__item'>
                        <button className='nav__btn'>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}