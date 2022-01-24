import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

import FeedbackData from './data/FeedbackData';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // Makes a copy of the current state, adding the newFeedback to the front
        setFeedback([newFeedback, ...feedback])
    }

    return (
        // Elements must be part of a single parent element (allows to include multiple lines)
        // Wrapper everything in 'Router' to use Router
        // All 'Route' elements must be wrapped in parent 'Routes'
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    }></Route>  

                    <Route path='/about' element={<AboutPage />} />     
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
        
    )
}

export default App;