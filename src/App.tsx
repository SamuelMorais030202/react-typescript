import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator, clickCounter, fetchMovies } from './redux/actions';
import './App.css';
import { Dispatch } from './types';
import { useEffect } from 'react';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  },
  fetchMovies: {
    isFetching: boolean,
    movies: string[],
  }
};

function App() {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    margin-bottom: 3em;
  `;

  const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  `;

  const rootState = useSelector((state: RootState) => state);
  const dispatch : Dispatch = useDispatch();

  const handleClick = (count = 1) => {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(rootState);

  return (
    <div>
      <Header>
        <h1>Titulo</h1>
      </Header>

      <Container>
        <h1>Contador</h1>
        <h2>{rootState.counterReducer.count}</h2>
        <p>{`Quanridade de clicks ${rootState.counterReducer.clicks}`}</p>
        <button
          onClick={ () => handleClick() }
        >
          Incrementar
        </button>
        <button
          onClick={ () => handleClick(-1) }
        >
          Decrementar
        </button>
      </Container>
    </div>
  )
}

export default App
