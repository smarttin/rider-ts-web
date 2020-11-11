// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      blueColor: string;
      greenColor: string;
      greyColor: string;
      yellowColor: string;
    };
  }
}
