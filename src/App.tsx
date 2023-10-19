import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types/reduxTypes';
import { fetchDogImage } from './redux/actions';
import './App.css';

function App() {
  const dogReducer = useSelector((state: ReduxState) => state.dogReducer);
  const dispatch : Dispatch = useDispatch();

  if(dogReducer.isFetching) return <p>Loading...</p>

  return (
   <div>
     <h1>Dog Image Random</h1>

     <button
      onClick={() => { dispatch(fetchDogImage()) }}
     >
      New dog image
     </button>
     {
      dogReducer.imageUrl && (
        <img src={ dogReducer.imageUrl } alt="Image dog random" />
      )
     }
   </div>
  );
}

export default App
