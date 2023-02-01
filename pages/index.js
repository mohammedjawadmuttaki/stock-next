import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Jawad</title>
    </Head>
    <h1>Jawad Page</h1>
    <p>
      This is a sample page for Jawad.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
