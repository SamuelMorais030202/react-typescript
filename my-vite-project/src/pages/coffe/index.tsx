import { useParams } from "react-router-dom"
import { coffeeList } from "../../data"

export default function Coffe() {
  const params = useParams();
  const currentCoffe = coffeeList.find((coffe) => coffe.slug === params.coffee);

  return (
    <div>
      <h1>{currentCoffe?.title}</h1>
      <p>{currentCoffe?.description}</p>
      <div>
        <h2>Ingredientes:</h2>
        <ul>
          {
            currentCoffe?.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))
          }
        </ul>
      </div>
      <img src={currentCoffe?.image} alt={currentCoffe?.title} />
    </div>
  )
}
