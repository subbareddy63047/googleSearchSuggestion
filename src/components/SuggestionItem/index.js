// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {list, identified} = props
  const {suggestion} = list

  const identifyUser = () => {
    identified(suggestion)
  }

  return (
    <li className="list-container">
      <p className="list-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-icon-image"
        onClick={identifyUser}
      />
    </li>
  )
}

export default SuggestionItem
