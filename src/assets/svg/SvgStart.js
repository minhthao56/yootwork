import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStart() {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14" fill="none">
      <Path
        d="M8 .651l1.753 4.215.059.14.152.013 4.55.365-3.467 2.97-.116.098.036.149 1.059 4.44-3.896-2.38-.13-.079-.13.08-3.896 2.379 1.06-4.44.035-.149-.116-.099-3.467-2.97 4.55-.364.152-.012.06-.141L8 .65z"
        fill="#003786"
        stroke="#003786"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default SvgStart;
