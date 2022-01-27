import  { createContext, useState} from 'react'
import  { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is another item from context',
            rating: 10,
        },
        {
            id: 3,
            text: 'This is the last item from context',
            rating: 10,
        }
    ])
    // State for editing feedback (gets whichever feedback item was selected)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

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
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext