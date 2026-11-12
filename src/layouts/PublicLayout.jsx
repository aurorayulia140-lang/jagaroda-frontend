import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PublicFooter from '../components/PublicFooter'
import PublicNavbar from '../components/PublicNavbar'

export default function PublicLayout() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const targetId = decodeURIComponent(hash.slice(1))
    const scrollToTarget = () => {
      const target = document.getElementById(targetId)
      if (!target) return false
      target.scrollIntoView({ block: 'start' })
      return true
    }

    if (scrollToTarget()) return

    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [hash, pathname])

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7FA]">
      <PublicNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}