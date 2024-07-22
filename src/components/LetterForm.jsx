import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    mailboxId: 1,
    recipient: '', 
    message: '',
}

const LetterForm = (props) => {


    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addLetter(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Mailbox ID</label>
                <select id="mailboxId" name="mailboxId" value={formData.mailboxId} onChange={handleChange}>
                    {props.mailboxes.map((mailbox) => (
                        <>
                         <option value={mailbox._id} >Mailbox {mailbox._id}</option>
                        </>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient</label>
                <input id="recipient" name="recipient" value={formData.recipient} onChange={handleChange} />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                <button type="submit">Add Letter</button>
            </form>
        </>
    )
} 

export default LetterForm