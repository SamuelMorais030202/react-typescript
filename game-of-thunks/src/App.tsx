import { useDispatch, useSelector } from 'react-redux'
import { Character, Dispatch, ReduxState } from './types/type'
import { fetchCharacterName } from './redux/actions';
import './App.css'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  const rootState = useSelector((state: ReduxState) => state.fetchCharactersReducer);
  const dispatch : Dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCharacterName(search));
  }

  if (rootState.isFetching) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Game of Thrones</h1>
      <input
        type="text"
        value={search}
        onChange={ (event) => setSearch(event.target.value) }
        placeholder="Name character"
      />
      <button
        onClick={handleClick}
      >
        search
      </button>

      <div>
        {rootState.character.map((character : Character, index) => (
          <div key={index}>
            <h2>
              {character.name || "name not found"}
            </h2>
            <p>{`Born ${character.born}`}</p>
            <h3>Titles:</h3>
            <ol>
              {character.titles.map((title) => (
                <li key={ `${title}` }>{title}</li>
              ))}
            </ol>
            <h3>Aliases:</h3>
            <ol>
              {character.aliases.map((alias) => (
                <li key={ `${alias}` }>{alias}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
