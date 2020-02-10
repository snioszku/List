import React from 'react';

import LinkContainer from '../Containers/LinkContainer';
const Footer = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter="all">All</LinkContainer>
    <LinkContainer filter="active">Active</LinkContainer>
    <LinkContainer filter="completed">Completed</LinkContainer>
  </div>
);
export default Footer;
