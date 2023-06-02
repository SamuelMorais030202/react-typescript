import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"

interface IList {
  id: number;
  title: string;
  checked: boolean;
}
export const DashBoard = () => {
  const [item, setItem] = useState<string>('');
  const [list, setList] = useState<IList[]>([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }

  const addItemAndList = useCallback(() => {
    if (item.length === 0) return alert('É preciso digitar um item'); 

    setList((oldList) => {
      return [
        ...oldList,
        { 
          id: oldList.length,
          title: item,
          checked: false,
        }
      ];
    });

    setItem('');
  }, [item]);

  return (
    <div>
      <p>Listas</p>

      <input
        type="text"
        name="item"
        value={ item }
        onKeyDown={ e => e.key === 'Enter' ? addItemAndList() : null }
        onChange={ (e) => setItem(e.target.value) }
      />
      <button type="button" onClick={addItemAndList}>Adicione!</button>

      <p>
        { `Itens selecionados: ${list.filter((itemToList) => itemToList.checked === true).length}` }
      </p>
      <ul>
        {
          list.map((itemList, index) => (
            <li key={ itemList.id }>
              <input
                type="checkbox"
                onChange={ () => {
                setList((oldList) => {
                  return oldList.map((listItem) => {
                    const checkingItem = listItem.title === itemList.title
                    ? !listItem.checked
                    : listItem.checked
                    return {
                      ...listItem,
                      checked: checkingItem,
                    }
                  });
                })
              } } />
              {' '}
              { itemList.title }
            </li>
          ))
        }
      </ul>

      <button onClick={ handleClick }>Redirecionanmento</button>
    </div>
  );
}