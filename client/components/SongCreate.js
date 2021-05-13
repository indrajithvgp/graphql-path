import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql} from 'react-apollo'
import {Link, hashHistory} from 'react-router'

class SongCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {title:''}
    }

    handleSubmit(e){
        this.props.mutate({
            variables:{ 
                title: this.state.title
            }
        }).then(() => hashHistory.push('/'))
        e.preventDefault()
    }

    render() {

        return (
            <div>
            <Link to="/">Back</Link>
            crete
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>Select a song</label>
                <input 
                value={this.state.title}
                onChange={(e)=>{this.setState({title: e.target.value})}}/>
                </form>
            </div>
        )
    }
}

const mutation = gql`
mutation AddSong($title: String){
    addSong(title: $title){
        id
        title
    }
}

`

export default graphql(mutation)(SongCreate)
