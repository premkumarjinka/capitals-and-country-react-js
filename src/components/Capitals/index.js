import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {a: countryAndCapitalsList[0].country}

  onSelect = event => {
    console.log('prem in onSelect')
    const a = event.target.value
    console.log(a)

    const result = countryAndCapitalsList.find(eachItem => eachItem.id === a)
    console.log(result.country)
    this.setState({a: result.country})
  }

  render() {
    const {a} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <ul className="list-container">
            <select onChange={this.onSelect}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </ul>

          <p className="country">{a}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
