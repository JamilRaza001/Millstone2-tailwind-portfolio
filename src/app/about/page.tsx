import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import Skills from"@/components/Skills";
const AboutPage = () => {
  return (
    <div className="bg-gray-900">
      <section className="text-gray-400  body-font">
        <h1 className="text-6xl font-bold text-green-500 text-center underline pt-10">
          About Me
        </h1>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/mypic.png"
            width={300}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full text-white">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white hover:text-green-400">
            Hello, I am M.Jamil Raza Attari
            </h1>
            <p className="leading-relaxed mb-8 text-[20px] hover:text-green-200">
              A multifaceted professional with a diverse skill
              set that encompasses web development, e-commerce, graphic design,
              and customer service. With experience in both technical and
              client-facing roles, I adopt a comprehensive approach to every
              project I engage in. I excel in WordPress web development, social
              media management, and crafting captivating visual content using
              tools like Canva and CapCut. My technical proficiency includes
              building modern web applications with Next.js, where I creatively
              apply custom CSS for styling, allowing for flexibility and
              innovation in design. In addition to my development skills, I
              possess a solid background in customer service from my tenure at
              HBL and my role as a Customer Service Agent. My practical
              experience in managing online stores has enhanced my ability to
              understand user needs and ensure a smooth online experience. At
              present, I am actively broadening my expertise by delving into
              Generative AI and Data Science. I am concentrating on data
              analysis, data wrangling, and visualization using tools such as
              Pandas, NumPy, Matplotlib, and Seaborn. I am driven to extract
              actionable insights from data to optimize processes and enhance
              decision-making. Fueled by curiosity and a commitment to
              continuous learning, I consistently seek out new
              challenges—whether that involves mastering advanced web
              technologies, improving customer experiences, or exploring
              innovative applications of AI and data science. I invite you to
              explore my portfolio, where you can see how I integrate
              creativity, technology, and data-driven insights to deliver
              effective and forward-thinking solutions
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-[50px] text-blue-600 hover:text-green-500 border-0 py-2 px-6  rounded">
                <Link
                  href={"https://www.linkedin.com/in/jamilrazaa/"}
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </button>
              <button className="inline-flex text-[50px] hover:text-green-500 border-0 py-2 px-6 rounded">
                <Link href={"https://github.com/JamilRaza001"} target="_blank">
                  <FaSquareGithub />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default AboutPage;

