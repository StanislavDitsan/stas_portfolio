import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stas Ditsan Portfolio</title>
        <meta name="description" content="Stas Ditsan Portfolio"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>


      <main className="bg-white px-10">
        <section className="h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-dense">Stas Ditsan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer mr-1" />
              </li>
              <li><a className=" bg-gradient-to-t from-black to-gray-400 text-white px-4 py-2 ml-8 rounded-md font-dense" href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}