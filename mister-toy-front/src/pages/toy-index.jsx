import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ToyList } from '../cmps/toy-list.jsx'
import { ToyFilter } from '../cmps/toy-filter.jsx'
import { toyService } from '../services/toy.service.js'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, saveToy } from '../store/toy.action.js'
import { useEffect } from 'react'


export function ToyIndex() {
//     const massage = useSelector((storeState) => storeState.massageModule.massage)
    const toys = useSelector((storeState) => storeState.toyModule.toys)
//     const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)


    const dispatch = useDispatch()

    useEffect(() => {
        onLoadToys()
    }, [])

    function onLoadToys() {
        loadToys()
            .then(() => {
                // showSuccessMsg('Toys loaded')
            })
            .catch(err => {
                // showErrorMsg('Cannot load toys')
            })
    }

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
console.log('toys:',toys)
    return <section>
        <main>
            <Link to={`/toy/edit`}>Add Toy</Link>
            <ToyFilter  />
            {/* {isLoading && <p>Loading...</p>} */}
            <ToyList
                toys={toys}
            />
            <hr />
        </main>
    </section>


}
    
