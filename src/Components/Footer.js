import React from 'react';

import { VisibilityFilters } from '../ActionCreators/visibilityFilters';
import LinkContainer from '../Containers/LinkContainer';
const Footer = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter={VisibilityFilters.SHOW_ALL}>All</LinkContainer>
    <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</LinkContainer>
    <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </LinkContainer>
  </div>
);
export default Footer;
