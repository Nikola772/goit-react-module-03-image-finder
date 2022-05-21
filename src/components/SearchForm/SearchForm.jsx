import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MyIcon } from './icons/search.svg';
import styles from './SearchForm.module.css';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!this.state.query) return;

    // Отдать данные внешнему компоненту
    this.props.onSearch(this.state.query);

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      query: '',
    });

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>          
          <MyIcon width={16} height={16}/>
          Пошук 
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Введіть назву фото або зображення"
        />
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;