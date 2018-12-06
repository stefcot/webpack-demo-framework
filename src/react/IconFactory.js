import ReactHtmlParser from 'react-html-parser';

import FbIcon from 'raw-loader!svgo-loader!../assets/images/svg/facebook.svg';
import HomeIcon from 'raw-loader!svgo-loader!../assets/images/svg/home.svg';
import SearchIcon from 'raw-loader!svgo-loader!../assets/images/svg/search.svg';
import TwitterIcon from 'raw-loader!svgo-loader!../assets/images/svg/twitter.svg';
import UserIcon from 'raw-loader!svgo-loader!../assets/images/svg/user.svg';

export function IconFactory(SVGComponent) {
  console.log('IconFactory - SVGComponent: ', SVGComponent);
  return ReactHtmlParser(SVGComponent);
}

export const IconList = {
  facebook: FbIcon,
  home: HomeIcon,
  search: SearchIcon,
  twitter: TwitterIcon,
  user: UserIcon
};
