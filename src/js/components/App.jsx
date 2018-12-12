import React from 'react';

import Page from './Page';
import BannerSlot from './atoms/BannerSlot';

const App = props => (
  <Page name="Home" {...props}>
    <BannerSlot />
  </Page>
);

export default App;
