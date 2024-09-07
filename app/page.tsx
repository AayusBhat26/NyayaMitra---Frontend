import { NavigationBar } from "./components/NavigationBar/page";
import { HomePage } from "./pages/LandingPage/page";
import '@fontsource/dm-serif-text'; // Defaults to weight 400
import '@fontsource/dm-serif-text/400.css'; // Specify weight if needed
// import '@fontsource/dm-serif-text  /700.css'; // For bold text
export default function Home() {
 return(
  <div >
    <NavigationBar/>
    <HomePage/>
  </div>
 )
}
