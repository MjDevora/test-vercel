import Navigation from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>
        {/* Navigation de modules para que todas las paginas tengan su barra de navegacion */}
        <Navigation />
        {/*   */}
        {children}
      </body>
    </html>
  )
}
