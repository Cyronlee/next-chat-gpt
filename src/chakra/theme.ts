import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light', // 'dark' | 'light'
  useSystemColorMode: false, // https://chakra-ui.com/docs/styled-system/color-mode#adding-the-colormodescript
};

export const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: '#3D84F7',
      },
    },
    styles: {
      global: () => ({
        body: {
          bg: 'WhiteAlpha 200',
        },
      }),
    },
  }
);
