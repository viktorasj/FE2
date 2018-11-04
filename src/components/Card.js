import React from 'react';
import { getImageUrl } from '../../config';

export default class Card extends React.Component {
  constructor() {
    super();

    this.state = {
        opened: false,
    };

  }

  toggleSummary = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  };


  addRemoveLike = () => {
        const { onHeartClick,
                movie,
                } = this.props;
        onHeartClick(movie.id);
  }

  render() {
    const {
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
          id
      },
        likedMoviesId
    } = this.props;

    const { opened } = this.state;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

        <div className="card__title">
          {original_title}
        </div>

        <div className="card__like">
           <i className={likedMoviesId.indexOf(id) === -1 ? "fa fa-heart-o" : "fa fa-heart"} onClick={this.addRemoveLike} />
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>{vote_average} ({vote_count} votes)</span>
        </div>

        <div className="card-info">
          <div className="card-info__header" onClick={this.toggleSummary}>
            Summary
          </div>

          {opened
            ? <div className="card-info__description">{overview}</div>
            : null
          }

        </div>
      </div>
    );
  }
}
