import React, { Component } from 'react'
import gql from 'graphql-tag'
import {Link} from 'react-router'
import { graphql} from 'react-apollo'

class SongList extends Component {

    renderSongs(){
        return this.props.data.songs.map((song, id)=>(
            <li className="collection-item" key={id}>
            {song.title}
            </li>
        ))
    }

    render() {
        console.log(this.props)
        return (
            <div>
            <ul>
                {this.props.data.songs && this.renderSongs()}
            </ul>
            <Link to="songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
            </div>
        )
    }
}

const query = gql`
{
    songs {
        title
    }
}

`

export default graphql(query)(SongList)
