import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stas Ditsan Portfolio</title>
        <meta name="description" content="Stas Ditsan Portfolio"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>


      <main className="bg-white px-10">
        <section className="h-screen text-center">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="mx-left">
              <Image src="/avatar.png" alt="My Image" width={25} height={25} />
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer mr-1" />
              </li>
              <li><a className=" bg-gradient-to-b from-blue-700 to-blue-500 text-white px-4 py-2 ml-8 rounded-md font-dense" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="p-20 text-center">
            <h2 className="text-5xl mt-10 font-dense">Stas Ditsan</h2>
            <h3 className="text-lg py-1 font-dense">Full Stack Developer</h3>
            <p className="mt-3 font-extralight text-gray-700">My goal is to deliver dynamic and responsive web experiences that meet the unique needs of each client and user.</p>
          </div>
          <div className="cursor-pointer flex justify-center gap-3 py-3 text-gray-800">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="mx-10">
              <Image src="/landing.jpg" alt="My Image" width={500} height={500} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <h3 className="text-3xl font-dense py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">
              I offer a range of web development services to help businesses and individuals establish an online presence or improve their existing web applications.
            </p>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">My services include full-stack web development, front-end development, web design, responsive design, and website maintenance.</p>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">
              I work with modern technologies and frameworks to deliver high-quality, scalable solutions that meet my clients' unique needs.
            </p>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">
              Whether you need a simple website, a complex web application, or ongoing website maintenance, I can provide a solution that's tailored to your requirements.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}