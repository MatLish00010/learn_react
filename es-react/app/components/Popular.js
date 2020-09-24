import React from 'react'

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    render() {
        const languages = ['All', 'JavaScript', 'Java', 'Css', 'Python']
        return (
            <ul className='nav'>
                {languages.map((item) => (
                    <li key={item} className='nav__item'>
                        <button className='nav__btn'
                                style={item === this.state.selectedLanguage ? {color: '#ff4d96'} : null}
                                onClick={() => this.updateLanguage(item)}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}