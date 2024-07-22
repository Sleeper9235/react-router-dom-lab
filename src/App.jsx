import { useState } from 'react' 
import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'
import LetterForm from './components/LetterForm'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addBox = (newMail) => {
    newMail._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMail])
  }

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/mailboxes/new'  element={<MailboxForm addBox={addBox} /> } />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} /> } />
        <Route path='/newLetter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </>
  )
}

export default App