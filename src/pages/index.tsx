import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BackgroundContainer from '@/component/container/background/main/backgroundMain'
import MainRouter from '@/pages/router/main/mainRouter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainRouter />
  )
}
