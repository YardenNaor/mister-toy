
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

// import './App.css';
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

import { HomePage } from './pages/home-page'
import { AboutUs } from './pages/about-us'
import { ToyIndex } from './pages/toy-index'
import { ToyEdit } from './cmps/toy-edit'
import { ToyDetails } from './pages/toy-details'


export function App() {
    // console.log('store:',store)
    return  (
        <Provider store={store}>
        <Router>
            <section className="main-layout app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route element={<HomePage />} path="/" />
                        <Route element={<AboutUs />} path="/about" />
                        <Route element={<ToyIndex />} path="/toy" >
                            <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
                        </Route>
                        <Route element={<ToyDetails />} path="/toy/:toyId" />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router>
    </Provider>
    )
}


