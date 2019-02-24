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
      loadingFavorite: false,
      error: false,
      errMsg: '',
    };
    this.loadJokes = this.loadJokes.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onSwitchToggle = this.onSwitchToggle.bind(this);
    this.timer = {};
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
   * On switch toggle generate random jokes.
   *
   * @param {Event} e - an input event
   */
  onSwitchToggle({ target }) {
    const { checked } = target;
    if (checked) {
      this.setState({ loadingFavorite: true });
      this.timer = setInterval(() => this.ticker(), 5000);
    } else this.clearTimer();
  }

  /**
   * On every tick fetch a random joke and update list.
   */
  ticker() {
    const { favoriteJokes } = this.state;
    if (favoriteJokes.length < 10) {
      loadJokes(1)
        .then(([joke]) => this.onFavoriteClick({ item: joke, fav: true }))
        .catch(err => this.handleError(err));
    } else this.clearTimer();
  }

  /**
   * Clear the interval.
   */
  clearTimer() {
    clearInterval(this.timer);
    this.setState({ loadingFavorite: false });
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
    const {
      jokes,
      favoriteJokes,
      loading,
      loadingFavorite,
      error,
      errMsg,
    } = this.state;

    return (
      <div>
        <Header user={auth.getUser()} />
        <section className="container-fluid px-4 pt-4 mt-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              )}
              <div className="card">
                <List
                  title={`Jokes (${jokes.length})`}
                  btnCaption="More fun"
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
                  loader={loadingFavorite}
                  onFavoriteClick={this.onFavoriteClick}
                  switchCaption="Random"
                  onSwitchToggle={this.onSwitchToggle}
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
