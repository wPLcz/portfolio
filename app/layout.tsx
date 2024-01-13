import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/global.scss'
import styles from '@/app/layout.module.scss';
import { Aside } from '@/app/containers/aside/aside';
import { Background } from '@/app/components/layout/background/Background';
import { Video } from '@/app/components/layout/video/Video';
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.page}>
            {children}
            <Aside/>
        </div>
        <>
            <Background/>
            <Video/>
        </>
        <SpeedInsights/>
        </body>
        </html>
    )
}
