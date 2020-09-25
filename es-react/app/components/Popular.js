import React from 'react'

function LanguagesNav({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Java', 'Css', 'Python']
    return (
        <ul className='nav'>
            {languages.map((item) => (
                <li key={item} className='nav__item'>
                    <button className='nav__btn'
                            style={item === selected ? {color: '#ff4d96'} : null}
                            onClick={() => onUpdateLanguage(item)}>
                        {item}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(selectedLanguage) {
        console.log(this.state);
        this.setState({
            selectedLanguage
        })
    }

    render() {
        const {selectedLanguage} = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}