import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Link to='/hats'>To Hats!</Link>
      <Directory />
    </div>
  );
};

export default Homepage;
