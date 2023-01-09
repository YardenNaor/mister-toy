import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser,
    updateActivity,
    updateBalance
}

window.us = userService

function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

function login({ username, password }) {
    return storageService.query(STORAGE_KEY)
        .then(users => {
            const user = users.find(user => user.username === username)
            if (user) return _setLoggedinUser(user)
            else return Promise.reject('Invalid login')
        })
}

function signup({ username, password, fullname, }) {
    const user = { username, password, fullname, balance: 1000, activities: [], toys: [] }
    return storageService.post(STORAGE_KEY, user)
        .then(_setLoggedinUser)
}

function updateActivity(activity) {
    // console.log('activity:',activity)
    return userService.getById(getLoggedinUser()._id)
        .then(user => {
            const newActivity = { activity, time: Date.now() }
            user.activities.push(newActivity)
            return storageService.put(STORAGE_KEY, user)
                .then((user) => {
                    _setLoggedinUser(user)
                    // console.log('user.activity:',user.activities)
                    return newActivity
                })
        })
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser({ _id, fullname, username, balance, activities }) {
    const userToSave = {
        _id,
        fullname,
        username,
        balance,
        activities
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

function updateBalance(diff) {
    return userService.getById(getLoggedinUser()._id)
        .then(user => {
            if (user.balance + diff < 0) return Promise.reject('No credit')
            user.balance += diff
            return storageService.put(STORAGE_KEY, user)
                .then((user) => {
                    _setLoggedinUser(user)
                    return user.balance
                })
        })
}



// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja'})
// userService.login({username: 'muki', password: 'muki1'})


// {
//     username: 'muki',
//         password: 'muki1',
//             fullname: 'Muki Ja',
//                 balance: 10000,
//                     activities: [{ txt: 'Added a Toy', at: 1523873242735 }]
// }