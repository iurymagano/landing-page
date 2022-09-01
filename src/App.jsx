import '../src/App.css'
import { AuthProvider } from './Contexts/AuthContext'
import { Router } from './Router'

function App() {

  return (
    <div className="app">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  )
}

export default App
