import React from 'react';
// class App extends Component {
//   render(){
//     return(
//       <React.Flagment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I.am clicked")}} />
//       </React.Flagment>
//     )
//
//   }
//
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  );
}
const Cat = () => {
  return <div>Meow!</div>;
}


export default App;
