import { useState } from 'react'

import './App.css'
import { uploadImage } from './apiCalls'
import firebaseLogo from './assets/firebase.svg'
import reactLogo from './assets/react.svg'

const App: React.FC = () => {
  const [file, setFile] = useState<File | undefined>(undefined)
  const [url, setUrl] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFile(file)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (file) {
      try {
        const result = await uploadImage(file)
        setUrl(result)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://firebase.google.com' target='_blank'>
          <img src={firebaseLogo} className='logo' alt='Firebase logo' />
        </a>
      </div>
      <h1>React + Firebase</h1>
      <form className='card' onSubmit={handleSubmit}>
        <input type='file' onChange={handleChange} />
        <button type='submit'>Upload</button>
      </form>
      {url && (
        <a className='url' href={url} target='_blank'>
          {url}
        </a>
      )}
    </>
  )
}

export default App
