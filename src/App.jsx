
import './App.css';
import appRouter from '../src/routes/appRouter';
import NavBar from './components/navBar';
import HomeBody from './components/homeBody';
import Footer from './components/footer';
 
// const App(){
//   return <appRouter />
// }

const App =() => {
  return( 
    <div>
    <NavBar />
    <HomeBody />
    <Footer />
    </div>

  );
};

export default App;
