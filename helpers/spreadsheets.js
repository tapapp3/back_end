// import config from '../config'

// // const name = 'Wine'
// export function load(callback, name){
//     window.gapi.client.load("sheets", "v4", () => {
//         window.gapi.client.sheets.spreadsheets.values
//         .get({
//             spreadsheetId: config.spreadsheetId,
//             range: `${name}!B2:20`
//         })
//         .then(
//             response => {
//                 const data = response.result.values
//                 const beers = data.map(beer => ({
//                     name: beer[0],
//                     title: beer[1]
//                 })) || []

//                 callback({beers})
//             },
//             response => {
//                 callback(false, response.result.error)
//         })
//     })
// }
