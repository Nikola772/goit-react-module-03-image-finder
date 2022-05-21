import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm'; 

import styles from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={styles.Searchbar}>
     <SearchForm  onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;