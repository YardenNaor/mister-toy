import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ToyList } from '../cmps/toy-list.jsx'
import { ToyFilter } from '../cmps/toy-filter.jsx'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, saveToy } from '../store/toy.action.js'
import { useEffect } from 'react'


// export function ToyIndex() {
//     const massage = useSelector((storeState) => storeState.massageModule.massage)
//     const toys = useSelector((storeState) => storeState.toyModule.toys)
//     const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)


//     const dispatch = useDispatch()

//     useEffect(() => {
//         onLoadToys()
//     }, [])

//     function onLoadToys(filterBy) {
//         loadToys(filterBy)
//             .then(() => {
//                 // showSuccessMsg('Toys loaded')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot load toys')
//             })
//     }

//     function onRemoveToy(toyId) {
//         removeToy(toyId)
//             .then(() => {
//                 showSuccessMsg('Toy removed')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot remove toy')
//             })
//     }

//     function onAddToy() {
//         const toyToSave = toyService.getRandomToy()
//         saveToy(toyToSave)
//             .then((savedToy) => {
//                 showSuccessMsg(`Toy added (id: ${savedToy._id})`)
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot add toy')
//             })
//     }

//     function onEditToy(toy) {
//         const price = +prompt('New price?')
//         const toyToSave = { ...toy, price }

//         saveToy(toyToSave)
//             .then((savedToy) => {
//                 showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot update toy')
//             })
//     }


//     function setFilter(filterBy) {
//         console.log('setFilter', filterBy)
//         onLoadToys(filterBy)

//     }

//     return <section>
//         <h3>Toys App</h3>
//         <main>
//             <PopupMenu top={<h2>Popup in Toy Index</h2>}>
//                 <Text />
//                 <Text />
//                 <Text />
//             </PopupMenu>
//             <Link to={`/toy/edit`}>Add Toy</Link>
//             <button onClick={onAddToy}>Add random Toy ⛐</button>

//             <ToyFilter onSetFilter={setFilter} />
//             {isLoading && <p>Loading...</p>}
//             <ToyList
//                 toys={toys}
//                 onRemoveToy={onRemoveToy}
//                 onEditToy={onEditToy}
//                 addToToyt={addToToyt}
//                 nums={[7, 8]}
//                 txt={'77'}
//             />
//             <hr />
//             <pre>{JSON.stringify(shoppingToyt, null, 2)}</pre>
//         </main>
//     </section>


// }
    
