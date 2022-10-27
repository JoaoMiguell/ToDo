import { useFonts, OpenSans_800ExtraBold, OpenSans_300Light, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold,
    OpenSans_300Light,
    OpenSans_700Bold
  })

  return (
    <Background>
      {fontsLoaded 
        ? <Home />
        : <Loading />
      }
    </Background>
  );
}
