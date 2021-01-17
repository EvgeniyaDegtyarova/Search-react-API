
import './App.css';
import React from "react"
import './App.css';
import Search from "./search"
import Image from "./Image"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imagesSrc:[]
    }
    this.changeImg = this.changeImg.bind(this);
  }
  
  render(){
    return (
      <div>
      <Search changeImg={this.changeImg}/>
      <Image imagesSrc={this.state.imagesSrc}/>
      </div>
    );
  }

  changeImg(imagesArray){
    this.setState({imagesSrc: imagesArray})
    console.dir(this.state.imagesSrc)
  }
}

export default App;


