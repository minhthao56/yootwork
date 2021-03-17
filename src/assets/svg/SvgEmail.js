import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEmail({width, height, fill}) {
  return (
    <Svg
      width={width ? width : 25}
      height={height ? height : 19}
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.083.125h20.834C24.066.125 25 1.059 25 2.208v14.584a2.085 2.085 0 01-2.083 2.083H2.083A2.085 2.085 0 010 16.792V2.208C0 1.06.934.125 2.083.125zm20.834 1.042H2.083c-.076 0-.144.028-.216.043 1.804 1.651 7.784 7.122 9.877 9.008.164.148.428.324.756.324s.592-.176.756-.324a2823.28 2823.28 0 009.877-9.007c-.072-.016-.14-.044-.216-.044zm1.041 15.625V2.208c0-.102-.03-.194-.058-.288-1.38 1.264-5.553 5.082-8.26 7.542 2.698 2.317 6.872 6.274 8.263 7.601.025-.088.055-.175.055-.271zM2.083 17.833h20.834c.083 0 .157-.029.234-.047-1.437-1.37-5.638-5.351-8.288-7.618-.345.314-.66.6-.91.823-.429.388-.931.592-1.453.592s-1.024-.204-1.453-.591c-.249-.224-.565-.51-.91-.824-2.65 2.267-6.85 6.247-8.289 7.618.078.018.152.047.235.047zm-1.041-1.041c0 .096.03.183.055.271 1.392-1.327 5.565-5.284 8.262-7.6C6.653 7.001 2.481 3.183 1.1 1.92c-.027.094-.057.186-.057.288v14.584z"
        fill={fill || '#fff'}
      />
    </Svg>
  );
}

export default SvgEmail;
