import delIcon from './delete.png';
import editIcon from './edit.png';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      isActiveX: true,
      gameIsOver: false 
    }

    this.setValue = this.setValue.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }

  checkWin(){
    const sq = this.state.squares.slice();

    if(!this.state.gameIsOver ){

      if(sq[0] === sq[1] &&  sq[1] === sq[2] && sq[0] !== '' ||
        sq[3] === sq[4] && sq[4]  === sq[5] && sq[3] !== '' ||
        sq[0] === sq[3] && sq[3] === sq[6] && sq[0] !== '' ||
        sq[6] === sq[7] && sq[7] === sq[8] && sq[6] !== '' ||
        sq[1] === sq[4] && sq[4] === sq[7] && sq[1] !== '' ||
        sq[2] === sq[5] && sq[5] === sq[8] && sq[2] !== ''||
        sq[0] === sq[4] && sq[4] === sq[8] && sq[0] !== '' ||
        sq[2] === sq[4] && sq[4] === sq[6] && sq[2] !== '' ) {
          
          this.finishGame();
      }
      else{
        let allFilled = sq.every((item) => item !== '');
        if(allFilled){
          alert('No winner, game is over');
          this.restartGame();
        }  
      }
    }
  }

  restartGame(){
    let stats = document.querySelector('.stats');
    this.setState({
          squares: ['', '', '', '', '', '', '', '', ''],
          isActiveX: true
        });
    stats.innerText = `Current player is ${this.state.isActiveX ? "X" : "0"}`;
  }

  finishGame(){
    let stats = document.querySelector('.stats');
    stats.innerText = `${this.state.isActiveX ? "0" : "X"} won!`;

    alert(`${this.state.isActiveX ? "0" : "X"} won!`);
    this.restartGame();
  }

  setValue(id){
    if(this.state.squares[id].length == 0){

        let value = this.state.isActiveX ? "X" : "0";
        let squaresCopy = this.state.squares.slice();
        squaresCopy[id] = value;

        let newisActiveX = !this.state.isActiveX;
        this.setState({
          squares: squaresCopy,
          isActiveX: newisActiveX
        });

      setTimeout(this.checkWin, 10)  
    }
  }


  render(){
    return (
      <div className="tictacapp">
        <div className="stats"> Current player is {this.state.isActiveX ? "X" : "0"} </div>
        <div className="game">
          {
            this.state.squares.map((square, index) => <Square key={index} id={index} setVal={this.setValue} text={square} />)
          }
        </div>
      </div>
    );
  }
}


function Square(props){
  return(
    <div onClick={() => props.setVal(props.id)} className="square">{props.text}</div>
  );
}


export default App;
