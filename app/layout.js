import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header/page';
import CheackedContextProvider from "../Context/Cheacked_Context";
import DisplayProvider from '../Context/DisplayContext';
import Guarantee from './Insurance_pages/Guaranteed/Guarantee';
import InvestmentPlans from './Insurance_pages/Investment/Investment';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Analah Insurance',
  description: 'Get the Best Insurance for your needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DisplayProvider>

      <CheackedContextProvider >
      <body className={`${inter.className} body` }>
        <div className="relative" id="top-scroll">
        <Header />
        {children}
        </div>
        <Guarantee />
        <InvestmentPlans />
        </body>
        </CheackedContextProvider>
      </DisplayProvider>
    </html>
  )
}
