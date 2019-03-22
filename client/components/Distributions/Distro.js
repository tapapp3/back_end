import React, {Component} from 'react'
import {connect} from 'react-redux'
import {distroThunk} from '../../store'
import {Link} from 'react-router-dom'

class Distros extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    await this.props.distroThunk()
    this.setState({loading: false})
  }
  render() {
    const {distributors} = this.props || []
    if (this.state.loading) {
      return <div />
    }
    return (
      <div>
        <ul>
          {distributors.map((company, idx) => {
            return (
              <li key={idx}>
                <Link to={`/distro/${company.name}`}>{company.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = {
  distroThunk: distroThunk
}

const mapStateToProps = state => {
  return {
    distributors: state.distros
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Distros)
