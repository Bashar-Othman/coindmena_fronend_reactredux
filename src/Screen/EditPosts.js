import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editPost} from '../Actions/AddPost'

class EditPosts extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:null,
            product_name:null,
            weight: null,
            price_tier:"Budget",
            unit_cost:"0",
            price_range:"0",
            _id:0,//this.props.post.id
            isEditable:true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        let post = this.props.posts.filter(data=>data._id == this.props.history.location.state.id) 
        this.setState({
            url : post[0].url,
            product_name: post[0].product_name,
            weight: post[0].weight,
            price_tier: post[0].price_tier,
            unit_cost:post[0].unit_cost,
            price_range:post[0].price_range,
            isEditable:post[0].isEditable,
            _id: post[0]._id
        })
    }

    linkChange(link){
        debugger
        this.setState({
            url:link.target.value
        })
    }

    

    nameChange(e) {
        debugger
        this.setState({
            product_name:e.target.value
        })
    }

    weightChange(e) {
        debugger
        this.setState({
            weight:e.target.value
        })
    }

    availabilityChange(e) {
        debugger
        this.setState({
            imageLink:e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.editPost(this.state)
        this.props.history.push('/')
    }
    priceRange(e) {
        debugger
        this.setState({
            price_range:e.target.value
        })
    }
    priceTier(e) {
        debugger
        this.setState({
            price_tier:e.target.value
        })
    }
    isEditable(e) {
        debugger
        this.setState({
            isEditable:!this.state.isEditable
        })
    }
    render() {
        return (
            <div>
                <h1> CoinMena </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={(data)=>{this.nameChange(data)}} type="text" placeholder="Name" value={this.state.product_name} name="name" />
                        <input onChange={(data)=>{this.weightChange(data)}} type="text" placeholder="Weight" value={this.state.weight} name="wight" />
                        <input onChange={(data)=>{this.availabilityChange(data)}} type="text" placeholder="Link" value={this.state.url} name="link" />
                           <div>
                            <input onClick={(data)=>this.priceTier(data)} style={{width:"10%"}} type="radio" checked={this.state.price_tier == "budget"} id="Budget" name="priceTier" value="budget" />
                            <label for="budget">Budget</label>
                            <input onClick={(data)=>this.priceTier(data)}  checked={this.state.price_tier == "premier"} style={{width:"10%"}} type="radio" id="Premier" name="priceTier" value="premier" />
                            <label  for="female">Premier</label>
                            </div>
                            <div style={{marginTop:"20px", marginBottom:"20px"}}>
                            <label for="priceRange">Choose the price range:</label>
                            <select style={{marginLeft:"15px"}} onChange={(data)=>this.priceRange(data)}  name="priceRange" id="priceRange" value={this.state.price_range}>
                                {this.state.price_tier == "Budget" ? 
                                 <>
                                    <option value="$1-10">$1-10</option>
                                    <option value="$11-20">$11-20</option>
                                    <option value="$20-50">$20-50</option>
                                </>: 
                                <>
                                <option value="$50-99">$50-99</option>
                                    <option value="$100-199">$100-199</option>
                                    <option value="$200+">$200+</option>
                                    </>}
                                    
                            </select>
                            </div>
                            <input onChange={(data)=>this.isEditable(data)} checked={this.state.isEditable} style={{width:"5%"}} type="checkbox" id="Budget" name="priceTier" value="Budget" />
                            <label style={{marginLeft:"10px"}} for="budget">Is Eidtable</label>
                        <button > Update </button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {posts : state}
}

const mapActionToProps = {
    editPost:editPost,
}
const EditPost = connect(mapStateToProps,mapActionToProps)(EditPosts)

export default EditPost
