import  { createContext, useState, useEffect} from 'react'
import  { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    // State for editing feedback (gets whichever feedback item was selected)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // Only needs to run once, No dependencies
    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback from json-server
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // Makes a copy of the current state, adding the newFeedback to the front
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Update the feedback item being edited
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    // Sets item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // 'feedbackEdit' is the actual piece of state
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext