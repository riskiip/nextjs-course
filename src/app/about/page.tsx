import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About page',
  description: 'Ini halaman about'
}

export default function About() {
  return <h1>Ini halaman About</h1>
}