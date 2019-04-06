// import React from 'react'
// import config from '../../../config'
// import {load} from '../../../helpers/spreadsheets'
// import {connect} from 'react-redux'

// class Listy extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       beers: [],
//       error: null
//     }
//   }
//   componentDidMount() {
//     window.gapi.load('client', this.initClient)
//   }

//   initClient = () => {
//     window.gapi.client
//       .init({
//         apiKey: config.apiKey,
//         discoveryDocs: config.discoveryDocs
//       })
//       .then(() => {
//         load(this.onLoad, this.props.user.restaurant)
//       })
//   }

//   onLoad = (data, error) => {
//     if (data) {
//       const beers = data.beers
//       this.setState({beers})
//     } else {
//       this.setState({error})
//     }
//   }
//   render() {
//     const {beers, error} = this.state
//     if (error) {
//       return <div>Error</div>
//     }
//     return (
//       <ul>
//         {beers.map((beer, i) => {
//           return (
//             <li key={i}>
//               {beer.name} {beer.title}
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps)(Listy)
