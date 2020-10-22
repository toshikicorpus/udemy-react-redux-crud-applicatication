import React ,{Component}from 'react';
class App extends Component {
  render(){
    return(
      <React.Flagment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I.am clicked")}} />
      </React.Flagment>
    )

  }

}



export default App;
