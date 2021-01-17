import React from "react";

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            inputValue: "",
            images: []
        }
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
            <input type="search" placeholder="search" value={this.state.inputValue} onChange={this.handleValueChange}/>
            <input type="submit" onClick={this.formSubmit}/>
            </form>
        )
    }

    formSubmit(event) {
        event.preventDefault();
        fetch("https://pixabay.com/api/?key=19846287-8ade42f24b94f304e17c58eba"+"&q="+this.state.inputValue)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              images: result
            });
            this.changeParentState()
          },
          (error) => {
          }
        )
    }
      
    handleValueChange(event) {
        this.setState({inputValue: event.target.value});
    }

    changeParentState(){
        this.props.changeImg(this.state.images);
    }

}