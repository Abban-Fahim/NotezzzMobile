import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DashSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={'100%'}
      height={70}
      style={{position: 'absolute', zIndex: 10000, top: -20}}
      {...props}>
      <Path
        d="M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z"
        fill="#777"
      />
    </Svg>
  );
}

export default DashSVG;
