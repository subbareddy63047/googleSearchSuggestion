// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  change = event => {
    this.setState({searchInput: event.target.value})
  }

  identified = text => {
    this.setState({searchInput: text})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon-image"
            />
            <input
              placeholder="Search Google"
              type="search"
              className="input"
              value={searchInput}
              onChange={this.change}
            />
          </div>
          <ul>
            {suggestionsList.map(eachItem => (
              <SuggestionItem
                list={eachItem}
                key={eachItem.id}
                identified={this.identified}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
