import React from "react";

export default class Image extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        if(this.props.imagesSrc.length!=0){
        return(
            <div>
                {this.props.imagesSrc.hits.map(((image,index) =>{
                    console.dir(image)
                    return <img src={image.webformatURL} key={index}/>
                }))}
            </div>
        )
        }
        else{
            return null;
        }
    }
}