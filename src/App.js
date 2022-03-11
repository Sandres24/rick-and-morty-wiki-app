import './styles/App.css';
import useFetch from './hooks/useFetch';
import { DEFAULT_APP_CONFIG } from './sample/config';
import { randomNumberGenerator } from './helpers/generators';

const randomId = randomNumberGenerator(126);

function App() {
   const { data, dispatch } = useFetch(
      `${DEFAULT_APP_CONFIG.baseLocationURL}/${randomId}`
   );

   return (
      <div className='App'>
         <p>RICK AND MORTY WIKI</p>
      </div>
   );
}

export default App;
