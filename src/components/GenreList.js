import React from 'react';


export default class GenreList extends React.Component {
    changeMoviesById = () => {
        this.props.setRequestedGenreId (this.props.genres.id);
    }
    render(){
        return(
             <button className="genresNavi" onClick={this.changeMoviesById}>{this.props.genres.name}</button>
        )
    }
}