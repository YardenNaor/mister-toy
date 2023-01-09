
import {Router, Routes, Route} from 'react-router-dom'

// import './App.css';
import { Provider } from 'react-redux'
import { store } from 'store'
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'

import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { ToyIndex } from './pages/toy-index.jsx'
import { ToyEdit } from './cmps/toy-edit.jsx'
import { ToyDetails } from './pages/toy-details.jsx'


export function App() {
    // console.log('store:',store)
    return <Provider store={store}>
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
}


