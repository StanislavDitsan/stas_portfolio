import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import Link from 'next/link';
import "app/globals.css";
export default function About() {
    return (
        <div>
            <Head>
                <title>About Me | Stas Ditsan Portfolio</title>
                <meta name="description" content="About Stas Ditsan"></meta>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <main className="bg-white px-5 md:px-20 lg:px-40">
                <section className="">
                    <nav className="py-10 mb-12 flex justify-between">
                        <div className="mx-left">
                            <Image src="/avatar.png" alt="My Image" width={25} height={25} />
                        </div>
                        <ul className="flex items-center">
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="bg-gradient-to-b from-blue-700 to-blue-500 text-white px-4 py-2 rounded-md font-dense">Back</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="shadow-md p-10 my-10 rounded-xl">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                        <Image src="/stas-avatar.png" alt="Stas Avatar" width={300} height={300} />
                    </div>
                    <h3 className="text-3xl font-dense py-5">About Me</h3>
                    <div className="font-light">
                        <p>I am a motivated and versatile professional with a background in physical education, economics and personnel management. While my previous experiences have been fulfilling, I have long been drawn to the rapidly-evolving field of software development. As a result, I pursued a professional degree in Full-Stack Software Development, where I am honing my talents in web development, programming, and other cutting-edge technologies.</p>
                        <br />
                        <p>As a manager and social media manager, I possess a diverse skillset that includes team leadership, customer service, marketing, and content creation. I have honed my communication skills by providing English-speaking customer support and managing social media accounts with thousands of followers. I'm proficient in HTML and CSS and knowledgeable in SEO techniques, and I'm eager to continue expanding my technical knowledge.
                        </p>
                        <br />
                        <p> In my free time, I enjoy creating content for social media platforms like TikTok, composing music, and producing drone videos for my YouTube channel. I'm a former member of Ukraine's Olympic rowing team and have achieved multiple Ukrainian championships, and am a Candidate for Master of Sports.</p>
                        <br />
                        <p>I'm excited to bring my unique background and passion for technology to a new opportunity in the software development industry. Whether it's working on a team to create innovative software solutions or developing compelling content for a website, I'm driven by the opportunity to explore new challenges and continue growing as a professional.</p>
                        <br />
                        <p>If you are looking for someone who can bring value to your organization and deliver results, I would love to connect and explore potential opportunities.</p>
                    </div>

                </section>
            </main>
        </div >
    );
}
