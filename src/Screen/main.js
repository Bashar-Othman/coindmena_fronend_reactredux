import React from 'react';
import {
    PostWall,
    Title
} from '../Components/index';
import '../Styles/style.css';
import {removePost} from '../Actions/RemovePost'
import {connect} from 'react-redux';

 class Mains extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
       console.log(this.props)
    }

    render(){
        return(
        <div>
            <Title header={"CoinMena"}/>
            <PostWall posts={this.props.posts} history={this.props.history} removePhoto={this.props.onRemovePost}/>
        </div>)
    }
}

const mapStateToProps = (state)=> {
    return {
        posts: state
    }
}

const mapActionToProps ={
    onRemovePost : removePost,
  }
 const Main = connect(mapStateToProps,mapActionToProps)(Mains);
 export default Main;
