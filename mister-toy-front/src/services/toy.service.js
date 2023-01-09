

import { storageService } from './async-storage.service.js'
// import {utilService} from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'toy_DB'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}

const toys = []
_createToys()

function query(filterBy = getDefaultFilter()) {
    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(STORAGE_KEY)
        .then((toysFromStorage) => {
            if (!toysFromStorage.length || !toysFromStorage) {
                storageService.save(STORAGE_KEY, toys)
                return toys
            }
            return toysFromStorage
        }).then((toys) => { 
           
            if (filterBy.searchTxt) {
                console.log('filterBy.searchTxt:',filterBy.searchTxt)
                const regex = new RegExp(filterBy.searchTxt, 'i')
                toys = toys.filter((toy) => regex.test(toy.txt))
              }
              if (filterBy.isDone!==null) {
                // console.log('toys:',toys)
                toys = toys.filter((toy) => {
                    console.log('filterBy:',filterBy.isDone)
                    console.log('toy.isDone:',toy.isDone)
                  return  toy.isDone ===filterBy.isDone
                })
              }
              console.log('toys at end of filter:',toys)
              return toys
        })

}


function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        toy.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}

function getEmptyToy() {
    return {
        _id: '',
        txt: '',
        isDone: false,
        createdAt: Date.now()
    }
}



function _createToys() {
    _createToy('Somthing to do')
    _createToy('I want to do it')
    _createToy('This must be done')
    _createToy('Do what you have to do')
    _createToy('Do it')
    _createToy('I do I do I do')
}


function _createToy(txt) {
    const toy = {
        _id: _makeId(),
        txt,
        isDone: false,
        createdAt: Date.now()
    }
    toys.push(toy)
}

function getDefaultFilter() {
    return { isDone:null, searchTxt: '' }
}

function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

// npx create-react-app react-pro-name
