import PropTypes from 'prop-types';

import styles from './IconButton.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <div className={styles.IconButtonWrapp}>
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
  </div>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;