import './App.css'
import { useState } from 'react'
import type { Book } from './data'
import { Route, Routes } from 'react-router-dom'
// import { StyleFunc } from './data'
import Register from './compoments/Register'
import MainPage from './compoments/mainPage'
import GuestUser from './compoments/GuestUser'

export const addBook = (arrBooks: Book[], book: Book) => {
  arrBooks.push(book)
  return arrBooks
}

export const searchByGenre = (arrBooks: Book[], genre: string) => {
  return arrBooks.filter((book) => book.genre === genre)
}

export const updateAvailability = (
  arrBooks: Book[],
  title: string,
  available: boolean,
) => {
  return arrBooks.map((book) =>
    book.title === title ? { ...book, available } : book,
  )
}

function App() {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            userId={userId}
            username={username}
            email={email}
            setUserId={setUserId}
            setUsername={setUsername}
            setEmail={setEmail}
          />
        }
      />
      <Route path="/Register" element={<Register />} />
      <Route path="/GuestUster" element={<GuestUser/>} />
    </Routes>
  )
}
export default App
