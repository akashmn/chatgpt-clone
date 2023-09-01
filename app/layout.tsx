import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth/next'
import NextAuth  from '../pages/api/auth/[...nextauth]'
import Login from '@/components/Login'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT-clone',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(NextAuth)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ) : (
              <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <Sidebar/>
              </div>

              {/* ClientProvider - Notification */}

              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}

        </SessionProvider>
      </body>
    </html>
  )
}
