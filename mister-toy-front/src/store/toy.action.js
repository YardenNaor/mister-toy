import { toyService } from '../services/toy.service.js'
import { store, REMOVE_TOY, SET_TOYS, ADD_TOY, UPDATE_TOY,SET_TOY,SET_FILTER } from './store.js'

export function loadToys(filterBy) {
    return toyService.query(filterBy)
        .then((toys) => {
            console.log('toys:',toys)
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('Had issues loading toys', err)
            throw err
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            console.log('Had issues Removing toy', err)
            throw err
        })
}

export function saveToy(toy) {
    const type = (toy._id) ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(savedToy => {
            store.dispatch({ type, toy: savedToy })
            return savedToy
        })
        .catch(err => {
            console.error('Cannot save toy:', err)
            throw err
        })
}

export function setToy(toyId){
    return toyService.getById(toyId)
    .then((toy) => {
        // console.log('toys:',toys)
        store.dispatch({ type: SET_TOY, toy })
    })
    .catch(err => {
        console.log('Had issues loading toys', err)
        throw err
    })
}

export function setFilter(filterBy) {
    
    store.dispatch({ type: SET_FILTER, filterBy })
  }
  