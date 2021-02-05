import React,{Component} from 'react';

export default class Photo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <ol>
            {this.props.tasks.map((item,index)=><li key={index}>{item}</li>)}
        </ol>
        )
    }
}