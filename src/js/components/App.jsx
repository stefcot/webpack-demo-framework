import React from 'react';

import BannerSlot from 'atoms/BannerSlot';
import Page from './Page';

const App = props => (
  <Page name="Home" {...props}>
    <BannerSlot />
  </Page>
);

export default App;
