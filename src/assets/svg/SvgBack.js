/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgBack() {
  return (
    <Svg
      width={10}
      height={15}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G
        style={{
          mixBlendMode: 'screen',
        }}>
        <Path
          d="M1.576 2.339c-.432-.376-.537-.861-.105-1.237a.628.628 0 01.76.056L8.676 6.75a.876.876 0 010 1.361l-6.642 5.774c-.432.375-1.006-.483-1.006-.483s-.155-.262.548-.878l5.859-5.093-5.86-5.093z"
          fill="#fff"
        />
        <Path
          d="M1.576 2.339c-.432-.376-.537-.861-.105-1.237a.628.628 0 01.76.056L8.676 6.75a.876.876 0 010 1.361l-6.642 5.774c-.432.375-1.006-.483-1.006-.483s-.155-.262.548-.878l5.859-5.093-5.86-5.093z"
          stroke="#fff"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}

export default SvgBack;
