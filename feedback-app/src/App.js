import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {

    return (
        // Elements must be part of a single parent element (allows to include multiple lines)
        // Wrapper everything in 'Router' to use Router
        // All 'Route' elements must be wrapped in parent 'Routes'
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }></Route>  

                        <Route path='/about' element={<AboutPage />} />     
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
        
    )
}

export default App;