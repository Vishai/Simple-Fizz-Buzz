import React from 'react'
import ReactDOM from 'react-dom'

class IndexComp extends React.Component{

  render(){

    const myFizz = () =>{
      console.log("button has been clicked");

        for(let i = 1; i < 100; i++){
          if((i % 3 === 0) && i % 5 === 0){
            console.log(`Number ${i} is Fizz-Buzz`);
          }else if(i % 3 === 0){
            console.log(`Number ${i} is Fizz`);
          } else if(i % 5 === 0){
            console.log(`Number ${i} is Buzz`)
          }
          else{console.log(`Number ${i} is ${i}`)}

        }

    }

    return(
      <div>
        <h3>Hello Fizz-Buzz</h3>
        <button onClick={myFizz}>Run Fizz</button>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))