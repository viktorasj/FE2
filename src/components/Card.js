import React from 'react';
import { connect } from 'react-redux';
import { getImageUrl } from '../../config';
import { likeMovie } from "../thunks";
import { unlikeMovie } from "../thunks";

class Card extends React.Component {
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

  render() {
    const {
      isHearted,
      onAddHeart,
      onRemoveHeart,
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
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

        <div className="card__like" onClick={isHearted ? onRemoveHeart : onAddHeart}>
          <i className={`fa fa-heart${isHearted ? '' : '-o'}`} />
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

export default connect(
    ({ movies: { likedMovies } },
     { movie: { id } }) =>
    ({isHearted: likedMovies.includes(id)}),

    (dispatch, { movie: { id } }) => ({
        onAddHeart: () => dispatch(likeMovie(id)),
        onRemoveHeart: () => dispatch(unlikeMovie(id))
    })
)(Card);