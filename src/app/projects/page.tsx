import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-5xl text-4xl font-medium title-font hover:text-green-500 text-white lg:w-1/3 lg:mb-0 mb-4">
            Here are some of My Projects
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            I have worked on a range of web development projects that showcase
            my skills and versatility in the field. My experience includes
            building and customizing WordPress websites, where I have focused on
            creating user-friendly navigation, responsive design, and visually
            appealing layouts. Many of my projects have involved e-commerce,
            where I developed online stores with features like product catalogs,
            shopping carts, and payment gateways to ensure a seamless shopping
            experience for customers. In addition to WordPress, I have worked
            extensively with Next.js, using TypeScript to enhance the
            reliability and maintainability of my code. I prefer to use custom
            CSS over Tailwind CSS to have more granular control over the design
            and styling. These projects allowed me to create dynamic,
            interactive web pages, highlighting my capability to handle both
            front-end and back-end development. I have also taken on projects
            that involve social media management, aligning web content with
            broader social media strategies to maintain a consistent brand
            image. My graphic design skills have played a key role in these
            projects, allowing me to create custom graphics, logos, and other
            visual assets using tools like Canva, which enhance the
            professionalism and visual appeal of my websites. Overall, my
            projects reflect a comprehensive approach to digital solutions,
            blending web development, e-commerce, and design to meet diverse
            business needs
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:border-green-300 hover:border-2"
                src="/images/Shareable.PNG"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:border-green-300 hover:border-2"
                src="/images/static.PNG"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-green-300 hover:border-2"
                src="/images/word.PNG"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:border-green-300 hover:border-2"
                src="/images/tic.PNG"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:border-green-300 hover:border-2"
                src="/images/kali.PNG"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:border-green-300 hover:border-2"
                src="/images/stop.PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
