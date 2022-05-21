import React from 'react';
import {TailSpin} from 'react-loader-spinner';

import styles from './Loader.module.css';

// const Loader = () => (
//   <div className={styles.Loader}>
//     <Template type="TailSpin" color="#02be6e" height={100} width={100} />
//   </div>
// );

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.Loader}>
       <TailSpin ariaLabel="loading-indicator" />
      </div>
    );
  }
}

export default Loader;