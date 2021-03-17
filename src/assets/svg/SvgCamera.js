import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SvgCamera = (props) => {
  return (
    <Svg
      width={21}
      height={15}
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.287 18.88h18.425c1.813 0 3.288-1.464 3.288-3.261v-9.66c0-1.797-1.471-3.258-3.28-3.261h.025V2.19c.018-.279-.162-.505-.442-.505h-1.77a.505.505 0 00-.506.506v.505h-.654A3.283 3.283 0 0015.14 0H9.86a3.283 3.283 0 00-3.235 2.697h-3.34C1.476 2.697.001 4.16.001 5.958v9.66c0 1.798 1.475 3.261 3.287 3.261zm-2.2-12.922c0-1.199.987-2.173 2.2-2.173H7.66l.084-1.088a2.193 2.193 0 012.116-1.61h5.278c1.015 0 1.863.685 2.116 1.61l.084 1.088h4.374c1.213 0 2.2.974 2.2 2.173v9.66c0 1.199-.987 2.175-2.2 2.175H3.287c-1.213 0-2.2-.976-2.2-2.174v-9.66zM9.223 3.54H15.7a.41.41 0 100-.821H9.223a.41.41 0 100 .82zM12.5 16.852a6.142 6.142 0 006.136-6.135A6.142 6.142 0 0012.5 4.583a6.142 6.142 0 00-6.135 6.134 6.142 6.142 0 006.135 6.135zm0-11.242a5.114 5.114 0 015.108 5.108 5.114 5.114 0 01-5.107 5.108 5.114 5.114 0 01-5.109-5.108 5.114 5.114 0 015.109-5.108zm-3.233 5.45a3.693 3.693 0 013.69-3.69.342.342 0 100-.684 4.378 4.378 0 00-4.374 4.373.342.342 0 00.684 0z"
        fill="#fff"
      />
    </Svg>
  );
};