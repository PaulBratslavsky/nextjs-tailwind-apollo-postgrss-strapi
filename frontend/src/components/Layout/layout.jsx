import React from 'react'
import Navigation from "components/Navigation/navigation"
import Footer from 'components/Footer/footer'

export default function Layout({children}) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
