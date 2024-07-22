import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    boxSize: 'Small',
    boxholder: '',
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input id="boxholder" name="boxholder" value={formData.boxholder} onChange={handleChange} />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Meidum">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Add Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm 