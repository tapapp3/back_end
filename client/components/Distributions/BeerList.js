import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleDistro} from '../../store'

class BeerList extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    await this.props.getSingleDistro(this.props.match.params.name)
    this.setState({loading: false})
  }
  render() {
    const date = new Date()
    const subtracted = date.getTime() - 1200000000
    const {singleDistro} = this.props || {}
    if (this.state.loading) {
      return <div />
    }
    return (
      <div>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>
          {singleDistro.name}
        </h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: 0
          }}
        >
          {singleDistro.map(beer => {
            const num = Number(beer.cleaned)
            if (num - subtracted < 0) {
              return (
                <div
                  key={beer.id}
                  className="card formList"
                  style={{backgroundColor: '#FCE694', color: 'red'}}
                >
                  <span>
                    {beer.OnTaps[0].tap}. {beer.name}{' '}
                  </span>
                </div>
              )
            } else {
              return (
                <div
                  key={beer.id}
                  className="card formList"
                  style={{backgroundColor: '#0D5C63', color: 'white'}}
                >
                  <span>
                    {beer.OnTaps[0].tap}. {beer.name}{' '}
                  </span>
                </div>
              )
            }
          })}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleDistro: state.singleDistro
  }
}

const mapDispatchToProps = {
  getSingleDistro: getSingleDistro
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList)
