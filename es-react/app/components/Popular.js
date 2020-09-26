import React from 'react'
import PropTypes from 'prop-types'
import {fetchPopularRepos} from "../utils/api";
import { FaUser , FaStar, FaCodeBranch, FaExclamationTriangle} from 'react-icons/fa'

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

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

function ReposGrid ({repos}) {
    return (
        <ul className='repos__list'>
            {repos.map((repo, index)=> {
                const {name, owner, html_url, stargazers_count, forks, open_issues } = repo
                const {login, avatar_url} = owner

                return (
                    <li key={html_url} className='repos__item'>
                        <h4 className='repos__item-title'>
                            #{index + 1}
                        </h4>
                        <img className='repos__avatar' src={avatar_url} alt={`Avatar for ${login}`}/>
                        <h2 className='repos__item-text'>
                            <a className='repos__item-link' href={html_url}>{login}</a>
                        </h2>
                        <ul className='card__list'>
                            <li className='card__item'>
                                <FaUser color='rgb(255, 191, 116)' size={22}/>
                                <a href={`https://github.com/${login}`}>
                                    {login}
                                </a>
                            </li>
                            <li className='card__item'>
                                <FaStar color='rgb(255, 215, 0)' size={12}/>
                                {stargazers_count.toLocaleString()} stars
                            </li>
                            <li className='card__item'>
                                <FaCodeBranch color='rgb(129, 195, 245)' size={22}/>
                                {forks.toLocaleString()} forks
                            </li>
                            <li className='card__item'>
                                <FaCodeBranch color='rgb(241, 138, 147)' size={22}/>
                                {open_issues.toLocaleString()} open open_issues
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

ReposGrid.protoTypes = {
    repos: PropTypes.array.isRequired
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: {},
            error: null,
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
        })

        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data)=> {
                    this.setState(({repos})=> ({
                        repos: {
                            ...repos,
                            [selectedLanguage ] : data
                        }
                    }))
                })
                .catch(() => {
                    console.warn('Error fetching repos: ', error)

                    this.setState({
                        error: `There was an error fetching the repositories`
                    })
                })
        }
    }

    isLoading() {
        const {selectedLanguage, repos, error} = this.state
        return !repos[selectedLanguage] && this.state.error === null
    }

    render() {
        const {selectedLanguage, repos, error} = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
                {this.isLoading() && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]}/> }
            </React.Fragment>
        )
    }
}