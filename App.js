import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const checkGame = function(game){

  var arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i = 0;i<arr.length;i++){
    // var index_1 = arr[i][0]
    // var index_2 = arr[i][1]
    // var index_3 = arr[i][2]
    let [index_1,index_2,index_3] = arr[i]
    if(game[index_1] === game[index_2]&&game[index_2] === game[index_3]&&game[index_1] !=null){
      return arr[i]
    }
  }
  return false
}
console.log(checkGame(
Array(9).fill(null)
))

//游戏的历史记录
class History extends Component{
  constructor(){
    super()
    this.state = {
      positiveOrder : false
    }
  }
  // state = {
  //   positiveOrder : true
  // }
  reOrder(){
    this.setState({
      positiveOrder:!this.state.positiveOrder
    })
  }
render(){
  console.log('props in History',this.props)
  //标题展示内容的显示
  const{xIsNext,winner,jump ,nowStep,game} = this.props
  let {history} = this.props
  const{positiveOrder} = this.state
  let title = ''
  let winnerStr = game[winner[0]]
  if(winner){
    title = `Winner is ${winnerStr}`
  }else{
    if(xIsNext){
      title = `Next Player is "X"`
    }
    else{
      title = `Next Player is "O"`
    }
  }
  return (
    <div className="history"> <h3>{title}
    </h3>
    <hr/>
    {/* 排序按钮 */}
    <button onClick ={()=>this.reOrder()}>反向排序</button>
    {/* 渲染历史记录 */}
    <ul>
    { 
      history.map((value,key)=>{
        var index 
        if(positiveOrder){
          index = key
        }else{
          index = history.length -key -1
        }
        
          return(
            <li key = {index}>
              <button type="button" onClick = {()=>jump(index)} style = {nowStep ===index?{color:'red'}:{}}>

              调到游戏第{index}步
              </button>
            </li>
        )
        
        

      })   
       }
    </ul>
    </div>
  )
}
}
//游戏的格子
class Square extends Component{
  render(){
    return (
      <div className="box" 
       onClick = {this.props.handleClick}
       style = {this.props.isHightLight?{color:'red'}:{}}
       >{this.props.index}</div>
    )
  }
}
//游戏面板
class Board extends Component{
  
  //方便生成统一的square组件
  //给组件传递参数，显示游戏状态
  getSquare(i){
    const {game,handleClick ,winner} = this.props
    var isHightLight = false
    if(winner){
       var set = new Set(winner)
       isHightLight = set.has(i)
    }
   

    return(
      <Square index = {game[i]}
      handleClick = {()=>handleClick(i)}
      isHightLight = {isHightLight}
      ></Square>
    )
  }
 
  render(){
    return (
      <div className="box-wrap"> 
      {/* 生成9个square */}
        {this.getSquare(0)}
        {this.getSquare(1)}
        {this.getSquare(2)}
        {this.getSquare(3)}
        {this.getSquare(4)}
        {this.getSquare(5)}
        {this.getSquare(6)}
        {this.getSquare(7)}
        {this.getSquare(8)}
      </div>
    )
  }
}
//整体游戏容器 维护游戏状态
class Game extends Component{
  constructor(){
    super()
    this.state={
      // game: Array(9).fill(null),
      history:[
        Array(9).fill(null)
      ],
      xIsNext:true,
      nowStep : 0
    }
  }
  handleClick(i){
    //i告诉我你点击了哪个小方块
    console.log(i)
    const {xIsNext,nowStep} = this.state
    let {history} = this.state
    history = history.slice(0,nowStep+1)
    //浅复制=》引用类型导致一个对象反复被修改  
    let game = history[nowStep].slice()

    //游戏是否已经有赢家
    if(checkGame(game)){
      return
    }
    //这个位置是否被点击过
    if(game[i]){
      return
    }
    //xIsNext 下一个玩家是X吗？
    if(xIsNext){
      game[i] = 'X'
    }else{
      game[i] = 'O'
    }



    this.setState(
      {
        history:history.concat([game]),
        xIsNext: !xIsNext,
        nowStep : nowStep+1
      }
    )


  }
  jump(i){
    var xIsNext = i%2===0?true:false
    var nowStep = i
    this.setState({
      xIsNext : xIsNext,
      nowStep:nowStep
    })
  }

  render(){
    const {history,xIsNext,nowStep} = this.state
    const game = history[nowStep]
    return (
      <div className='game'>
        <Board game = {game} handleClick={(index)=>this.handleClick(index)} winner = {checkGame(game)}></Board>
        <History
        nowStep = {nowStep} 
          jump={(i)=>this.jump(i)}
          history = {history}
          xIsNext={xIsNext}
          winner = {checkGame(game)}
          game = {game}
          ></History>
        {/* {console.log(game)} */}
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Game></Game>
    );
  }
}

export default App;
