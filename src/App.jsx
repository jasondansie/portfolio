import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { isLoading } from './components/features/UserSlice';
import Loading from './components/Loading';

function App() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.isLoading);

  // dispatch(isLoading(true));

  return (
    <div className="App">
      {
        loading 
          ? (<Loading />) 
          : (<h1>Home</h1>)
        }
    </div>
  );
}

export default App;
