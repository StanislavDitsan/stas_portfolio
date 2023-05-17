import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/shop.svg",
      link: "https://bloomella.herokuapp.com/"
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/blog.svg",
      link: "https://example.com/project2"
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/quiz.svg",
      link: "https://example.com/project2"
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/hangman.svg",
      link: "https://example.com/project2"
    },
    {
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/bar.svg",
      link: "https://example.com/project2"
    },
    {
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/task-manager.svg",
      link: "https://example.com/project2"
    },
    // Add more projects as needed
  ];
  return (
    <div>
      <Head>
        <title>Stas Ditsan Portfolio</title>
        <meta name="description" content="Stas Ditsan Portfolio"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>


      <main className="bg-white px-5 md:px-20 lg:px-40">
        <section className="h-screen text-center">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="mx-left">
              <Image src="/avatar.png" alt="My Image" width={25} height={25} />
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer mr-1" />
              </li>
              <Link href="/about" legacyBehavior>
                <a className="bg-gradient-to-b from-blue-700 to-blue-500 text-white px-4 py-2 ml-8 rounded-md font-dense">About Me</a>
              </Link>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="text-6xl mt-10 font-dense md:text-7xl">Stas Ditsan</h2>
            <h3 className="text-lg py-1 font-dense md:text-3xl">Full Stack Developer</h3>
            <p className="mt-3 font-extralight text-gray-700 md:text-xl max-w-xl mx-auto">My goal is to deliver dynamic and responsive web experiences that meet the unique needs of each client and user!</p>
          </div>
          <div className="cursor-pointer text-3xl flex justify-center gap-3 py-3 text-gray-800">
            <a href="https://github.com/StanislavDitsan" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/stanislav-ditsan/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
        </section>

        <section className="flex flex-wrap items-center mb-5">
          <div className="w-full lg:w-1/2 md:w-1/2">
            <div className="mx-10">
              <Image src="/stas-dev.svg" alt="My Image" width={500} height={500} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
            <h3 className="text-3xl font-dense py-1">Services</h3>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">
              I offer a range of web development services to help businesses and individuals establish an online presence or improve their existing web applications.
            </p>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">My services include full-stack web development, front-end development, web design, responsive design, and website maintenance.</p>
            <p className="text-md py-2 leading-2 font-extralight text-gray-700">
              I work with modern technologies and frameworks to deliver high-quality, scalable solutions that meet my clients' unique needs.
            </p>
          </div>
        </section>

        <section className="px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center shadow-md p-10 my-10 rounded-xl bg-gray-50">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image src="/SEO-STAS.png" alt="SEO ICON" width={100} height={100} />
              </div>
              <h3 className="text-2xl font-dense pt-8 pb-2 lg:text-3xl">SEO Optimization</h3>
              <p className="font-extralight text-dark-400 py-3">I take a comprehensive approach to SEO optimization</p>
              <p className="text-gray-700 py-1 font-extralight">Targeted Keywords</p>
              <p className="text-gray-700 py-1 font-extralight">Mobile Optimization</p>
              <p className="text-gray-700 py-1 font-extralight">Boost Visibility</p>
            </div>

            <div className="text-center shadow-md p-10 my-10 rounded-xl bg-gray-50">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image src="/coding-stas.png" alt="SEO ICON" width={100} height={100} />
              </div>
              <h3 className="text-2xl font-dense pt-8 pb-2 lg:text-3xl">Custom Web Development</h3>
              <p className="font-extralight text-dark-400 py-3">I develop unique web applications to meet your requirements.</p>
              <p className="text-gray-700 py-1 font-extralight">E-commerce Platform</p>
              <p className="text-gray-700 py-1 font-extralight">Booking System</p>
              <p className="text-gray-700 py-1 font-extralight">Personal Blog</p>
            </div>

            <div className="text-center shadow-md p-10 my-10 rounded-xl  bg-gray-50">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image src="/design.png" alt="SEO ICON" width={100} height={100} />
              </div>
              <h3 className="text-2xl font-dense pt-8 pb-2 lg:text-3xl">Modern Design</h3>
              <p className="font-extralight text-dark-400 py-3">I will elevate your online presence with modern web design</p>
              <p className="text-gray-700 py-1 font-extralight">Clean and Minimalistic</p>
              <p className="text-gray-700 py-1 font-extralight">Responsive Layout</p>
              <p className="text-gray-700 py-1 font-extralight">Interactive Elements</p>
            </div>
          </div>
        </section>

        <section className="px-5">
          <h3 className="text-3xl font-dense py-5">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="text-center shadow-md p-5 rounded-xl bg-gray-50 hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-xl" />
                </div>
                <h3 className="text-2xl font-dense pt-8 pb-2 lg:text-2xl">{project.title}</h3>
                <p className="font-extralight text-dark-400 py-3 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-blue-700  text-white px-4 py-2 rounded-md font-dense"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div >
  );
}