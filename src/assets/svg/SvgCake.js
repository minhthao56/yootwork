import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCake({width, height, fill}) {
  return (
    <Svg
      width={width ? width : 25}
      height={height ? width : 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.268 23.51H23v-5.707c.388-.326.61-.788.61-1.282v-1.92c0-1.046-.918-1.897-2.044-1.897h-.957V8.037c0-.78-.624-1.416-1.39-1.416h-.088v-.51a2.26 2.26 0 001.488-2.132c0-.33-.094-.888-.83-2.283a24.981 24.981 0 00-.77-1.349A.73.73 0 0018.4 0a.73.73 0 00-.62.347c-.015.026-.39.63-.77 1.35-.736 1.394-.83 1.952-.83 2.282a2.26 2.26 0 001.488 2.132v.51h-.087c-.768 0-1.392.635-1.392 1.416v4.667h-1.478V8.037c0-.78-.625-1.416-1.392-1.416h-.087v-.51a2.26 2.26 0 001.488-2.132c0-.33-.094-.888-.83-2.283a24.906 24.906 0 00-.77-1.349A.73.73 0 0012.5 0a.73.73 0 00-.62.347c-.015.026-.39.63-.77 1.35-.736 1.394-.83 1.952-.83 2.282a2.26 2.26 0 001.488 2.132v.51h-.087c-.767 0-1.392.635-1.392 1.416v4.667H8.811V8.037c0-.78-.624-1.416-1.392-1.416h-.086v-.51A2.26 2.26 0 008.82 3.979c0-.33-.095-.888-.832-2.283A24.926 24.926 0 007.22.347.73.73 0 006.6 0a.73.73 0 00-.62.347c-.015.026-.39.63-.77 1.35-.736 1.394-.83 1.952-.83 2.282a2.26 2.26 0 001.488 2.132v.51H5.78c-.767 0-1.392.635-1.392 1.416v4.667h-.956c-1.126 0-2.043.851-2.043 1.897v1.92c0 .494.221.956.61 1.282v5.707H.731a.739.739 0 00-.732.745c0 .412.328.745.732.745h23.536a.739.739 0 00.732-.745.739.739 0 00-.732-.744zM17.644 3.98c.005-.238.32-.956.756-1.767.436.81.75 1.528.756 1.767 0 .423-.34.768-.756.768a.763.763 0 01-.756-.768zm.01 4.13h1.492v4.59h-1.492V8.11zm-5.91-4.13c.005-.238.32-.956.756-1.767.437.81.75 1.528.755 1.767a.763.763 0 01-.755.768.763.763 0 01-.756-.768zm.01 4.13h1.492v4.59h-1.492V8.11zm-5.91-4.13c.005-.238.32-.956.756-1.767.437.81.75 1.528.756 1.767 0 .423-.34.768-.756.768a.763.763 0 01-.756-.768zm.01 4.13h1.492v4.59H5.854V8.11zm15.682 15.4H3.464v-5.277c.115-.013.229-.037.341-.07l1.85-.557a5.813 5.813 0 013.313 0l1.46.439c.668.201 1.37.302 2.072.302s1.404-.1 2.073-.302l1.459-.44a5.811 5.811 0 013.314 0l1.849.557c.112.034.226.058.34.071v5.277zm.61-6.989c0 .062-.05.113-.091.144a.503.503 0 01-.445.07l-1.848-.557a7.268 7.268 0 00-4.146 0l-1.46.439a5.812 5.812 0 01-3.313 0l-1.46-.44a7.203 7.203 0 00-2.072-.301c-.702 0-1.404.1-2.073.302l-1.849.556a.504.504 0 01-.444-.069c-.041-.031-.09-.082-.09-.144v-1.92c0-.193.237-.407.578-.407h18.134c.34 0 .578.214.578.407v1.92z"
        fill={fill || '#fff'}
      />
    </Svg>
  );
}

export default SvgCake;