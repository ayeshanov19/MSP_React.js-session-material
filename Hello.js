import React from 'react';
import Func from './Func'
class Hello extends React.Component{
  constructor(){
    super()
    this.state={message:'via props'}

  }

  render(){
    return(
        <div>
        <Func msg={this.state.message}/>
        </div>
       
    )
  }

}
export default Hello