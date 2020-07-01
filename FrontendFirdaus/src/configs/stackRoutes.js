import { ContactScreen, ContactsScreen } from '../screens/contacts';
import { MainScreen } from '../screens/main';
import { SplashScreen } from '../screens/splash';
import { HomeScreen } from '../screens/home';

const stackRoutes = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: "Main",
    component: MainScreen,
  },
  {
    name: "Contacts",
    component: ContactsScreen,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: "Contact",
    component: ContactScreen,
  },
  

];

export default stackRoutes;
