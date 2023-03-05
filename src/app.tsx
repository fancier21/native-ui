import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  PixelRatio,
  ScaledSize,
  Text,
} from 'react-native';
import {Button} from './components/button';
import {theme} from './theme';
import Typography from './ui/typography';

type Scale = number;
type Mode = 'width' | 'height';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT}: ScaledSize =
  Dimensions.get('window');

const widthScale: Scale = SCREEN_WIDTH / 414; // 392 / 414
const heightScale: Scale = SCREEN_HEIGHT / 896; // 753 / 896

const normalize = (size: number, based: Mode = 'width'): number => {
  const newSize: number =
    based === 'height' ? size * heightScale : size * widthScale;
  console.log('PixelRatio', PixelRatio.roundToNearestPixel(newSize));
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

function App(): JSX.Element {
  console.log('w:', SCREEN_WIDTH, 'h:', SCREEN_HEIGHT);
  console.log('Normalized', normalize(16));
  return (
    <SafeAreaView style={theme('flex-1', 'gap-2')}>
      {/* <Text style={{fontSize: normalize(24)}}>Test</Text> */}
      <Typography style={theme('text-lg', 'font-bold')}>App</Typography>
      <Button>
        <Typography>Application Button</Typography>
      </Button>
    </SafeAreaView>
  );
}

export default App;
