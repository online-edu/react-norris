import React, { Component } from 'react';
import { List, Header } from '../../components';
import auth from '../../utils/auth';
import { loadJokes, onFavorite, loadFavoriteJokes } from './JokesService';
/**
 * Jokes component.
 */
class Jokes extends Component {
  /**
   * Intilalizes the state and binds all methods.
   *
   * @param {Object} props - access 'props'
   */
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      favoriteJokes: [],
      loading: true,
      error: false,
      errMsg: '',
    };
    this.loadJokes = this.loadJokes.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
  }

  /**
   *  Fetch jokes from API and localStorage once component is mounted.
   */
  componentDidMount() {
    this.loadJokes();
    this.setState({ favoriteJokes: loadFavoriteJokes() });
  }

  /**
   * On favorite click of particular joke update the lists.
   *
   * @param {Object} joke - joke
   * @param {boolean} fav - fav or un-fav
   */
  onFavoriteClick({ item: joke, fav }) {
    const jokes = onFavorite(joke, fav);
    this.setState({ favoriteJokes: jokes });
  }

  /**
   * Load jokes once component is mounted.
   */
  loadJokes() {
    this.setState({ loading: true });
    loadJokes()
      .then(jokes => this.setState({ jokes, loading: false }))
      .catch(err => this.handleError(err));
  }

  /**
   * Handles common errors for n/w requests.
   *
   * @param {string} err - Error message
   */
  handleError(err) {
    this.setState({ loading: false, error: true, errMsg: err.toString() });
  }

  /**
   * Render method for component
   */
  render() {
    const { jokes, favoriteJokes, loading } = this.state;

    return (
      <div>
        <Header user={auth.getUser()} />
        <section className="container-fluid px-4 pt-4">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="card">
                <List
                  title={`Jokes (${jokes.length})`}
                  btnCaption="View more"
                  loader={loading}
                  items={jokes}
                  onHeaderAction={this.loadJokes}
                  onFavoriteClick={this.onFavoriteClick}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="card">
                <List
                  favorite
                  title="Favorite Jokes"
                  items={favoriteJokes}
                  onFavoriteClick={this.onFavoriteClick}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Jokes;
