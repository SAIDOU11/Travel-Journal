import Navbar from './components/Navbar.jsx';
import Place from './components/Place.jsx';
import data from '../data.jsx';

const App = () => {
  const arrayData = data.map((place) => {
    console.log(place);
    return <Place {...place} />;
  });
  return (
    <div>
      <Navbar />
      <section>{arrayData}</section>
    </div>
  );
};

export default App;
