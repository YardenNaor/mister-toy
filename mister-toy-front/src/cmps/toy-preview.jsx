import { NavLink } from 'react-router-dom'

export function ToyPreview({toy}){
  return  <article>
            <h4>{toy.name}</h4>
            <p>Price: <span>${toy.price.toLocaleString()}</span></p>
            <p> <span>{toy.inStock? 'For sale!': 'Sold out'}</span></p>
            <NavLink to={`/car/${toy._id}`}>Details</NavLink> |
        <NavLink to={`/toy/edit/${toy._id}`}>Edit</NavLink>

        </article>

}



