import Footer from '@/components/Footer'
import '../globals.css'
import SearchHeader from '@/components/SearchHeader'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
      <div>
        <SearchHeader/>
        {children}
        {/* <Footer /> */}
      </div>
  )
}