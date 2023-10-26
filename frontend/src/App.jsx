import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className='App'>
        <header>
          <img src={viteLogo} alt="logo" />
          <h1>Games</h1>
        </header>
        <Form />
      </div>
    </>
  )
}

export default App
