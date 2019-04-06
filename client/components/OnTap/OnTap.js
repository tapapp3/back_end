import React from 'react'
import {connect} from 'react-redux'
import {fetchBeers} from '../../store'

class OnTap extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedBeer: {},
      selected: false
    }
  }

  componentDidMount() {
    this.props.fetchBeers()
  }

  handleClick = async beer => {
    await this.setState({
      selectedBeer: beer,
      selected: true
    })
    console.log(this.state)
  }

  handleChange = async (id, tap, beer) => {}
  render() {
    const {beers} = this.props || []
    return (
      <div>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {!this.state.selected ? (
            <div>
              {beers.map(beer => {
                if (!beer.OnTaps[0].tap)
                  return (
                    <div key={beer.id} style={{display: 'flex', margin: 0}}>
                      <div
                        className="card formList"
                        onClick={() => this.handleClick(beer)}
                      >
                        <span>{beer.name}</span>
                      </div>
                    </div>
                  )
              })}
            </div>
          ) : (
            <div>
              {beers.map(beer => {
                if (beer.OnTaps[0].tap) {
                  const {tap} = beer.OnTaps[0]
                  return (
                    <div key={beer.id} style={{display: 'flex', margin: 0}}>
                      <div
                        className="card formList"
                        onClick={() =>
                          this.handleChange(
                            beer.id,
                            tap,
                            this.state.selectedBeer
                          )
                        }
                      >
                        <span>
                          {tap}. {beer.name}
                        </span>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          )}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beers: state.allBeers
  }
}

const mapDispatchToProps = {
  fetchBeers: fetchBeers
  //   updateList: updateList
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTap)
