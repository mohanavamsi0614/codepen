import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Edit from './Edit'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
  }, [html, css, js])

  return (
    <>
      <div className="top">
        <Edit
          displayName="HTML"
          value={html}
          onchange={setHtml}
        />
        <div className='middle'>
        <Edit
          displayName="CSS"
          value={css}
          onchange={setCss}
        />
        </div>
        <Edit
          displayName="JS"
          value={js}
          onchange={setJs}
        />
      </div>
      <div className="out">
      <p align="left">output</p>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
        />
      </div>
   </>
  )
}

export default App
