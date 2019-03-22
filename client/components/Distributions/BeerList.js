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
    const {singleDistro} = this.props || {}
    const list = singleDistro.beerlists || []
    if (this.state.loading) {
      return <div />
    }
    return (
      <div>
        <h1>{singleDistro.name}</h1>
        <ul>
          {list.map(beer => {
            return (
              <li key={beer.id}>
                {beer.name} on tap {beer.tap}
              </li>
            )
          })}
        </ul>
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
