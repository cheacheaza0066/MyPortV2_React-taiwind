import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import PicMylife from "../assets/Pic.png";
// import TextWriter from "../Components/TextWriter";
import { TypeAnimation } from "react-type-animation";

function About() {
  const textStyle = {
    heading: "Ubuntu, sans-serif",
    sans: "Cabin, sans-serif",
    monospace: "Fira Code, monospace",
  };

  return (
    <>
      <Nav />

      <div className="w-screen flex bg-gray-800 flex-col">
        <div
          className="md:mt-64 sm:mt-52 mt-40 text-white text-center"
          style={{ fontFamily: textStyle.monospace }}
        >
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 sm:mb-10">
            {/* Hi there! */}
            <TypeAnimation
              sequence={["Hi there!", 1000]}
              wrapper="span"
              speed={20}
              style={{ color: "white" }}
              repeat={Infinity}
              cursor={false}
            />
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            I’m Thanin Pitakpoolsin
          </p>

          {/* About me */}
          <div className="flex flex-col md:flex-row justify-between items-center md:mt-64 mt-32">
            <div className="md:ml-8">
              <img
              className="rounded-3xl md:w-full md:ml-24 w-96 object-fit: cover" /* Added object-fit */
              src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/168428269_3951792324882647_1929099210224564198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGRMIMvqPQd1A1Ocb7i2lnxXKsLPX0HHs5cqws9fQceznCUqflFBqHyiyjcLqRMXXWrtWK-J5SC7z6_waY0B7Qi&_nc_ohc=ZDMAyX7A1ZYAX9wC3K1&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfDR8gTmUKdtEuMNQOuMEOXD_zo6Gya6BeZjXZcT9OXBAg&oe=65C431E9"
                alt=""
              />
            </div>
            <div className="text-sm md:text-base lg:text-lg xl:text-xl mt-6 md:mt-0 ml-10 mr-10 md:ml-36 md:mr-10 text-left">
              <p className="mt-4 md:mt-10">
              Hello, my name is Thanin Pitakpoolsin. I’m a web developer, 
              and I can create the website you need and help you develop high quality websites.
              </p>
              <p className="mt-2 md:mt-5">
              I’ve been a developer since I graduated,
              and I have an interest in creating websites to provide the best experience for everyone using them.
              </p>
              <p className="mt-2 md:mt-5">
              In the present, I focus on developing beautiful websites, 
              aiming to provide the best experience for everyone and ensuring they are easy to use and manage
              </p>
            </div>
          </div>

          {/* My Story*/}
          <div className="flex justify-between flex-col-reverse md:flex-row mt-12">
            <div className="md:mt-10 md:mb-10 md:w-full md:ml-32 md:text-base text-sm  lg:text-lg xl:text-xl mt-3 ml-10 mr-10 text-left">
              <h1 className="md:text-5xl font-semibold text-2xl">My Story</h1>
              <p className="mt-4 md:mt-5">
                Since I was a child, I’ve always loved technology and loved
                playing video games. My dream has always been to become a
                programmer so that I can create my own games.
              </p>
              <p className="mt-4 md:mt-5">
                I got my first computer when I was 10 years old, and since then,
                I have been studying programming languages. My first programming
                language is C.
              </p>
              <p className="mt-4 md:mt-5">
                I pursued a degree in computer engineering, and for my first
                project, I developed an application for predicting skin diseases
                using neural networks, React, and Flutter.
              </p>
              <p className="mt-4 md:mt-5">
                And I never stop learning about new technologies in web
                development. to keep up with the rapidly changing lifestyles of
                people.
              </p>
            </div>
            <div className="md:w-full flex justify-center items-center mr-10 ml-10 mt-5 mb-5">
              <img className="" src={PicMylife} alt="" />
            </div>
          </div>

          {/* My Story 2*/}
          <div className="flex justify-between flex-col md:flex-row items-center mt-12 mb-10">

          <div className="md:w-full flex justify-center items-center md:ml-0 md:mr-0 ml-10 mr-10 mt-5 mb-5">
              <img
      className="md:w-96 md:ml-0 md:mr-0 w-96 ml-20 object-fit: cover"
                src="https://www.datocms-assets.com/38195/1607120991-about-2.png?fm=webp"
                alt=""
              />
            </div>
            <div className="md:mt-10 md:mb-10 md:w-full md:text-base text-sm  lg:text-lg xl:text-xl mt-3 md:ml-0 ml-10 mr-10 text-left">
              <p className="mt-4 md:mt-5">
              I’ve worked in an automation engineer position as a dashboard developer.
               I built a dashboard using the Ignition SCADA system, 
               Python, and MySQL to develop a visually appealing interface.
              </p>
              <p className="mt-4 md:mt-5">
              I have also learned more about website development.
               I have studied the tools used in web development, 
               specifically the MERN Stack, 
               and applied them in a project.
              </p>
              <p className="mt-4 md:mt-5">
                <a className="text-red-500 font-bold hover:underline" href="/project">
                  see more my Project &#8599;
                </a>
              </p>
             
            </div>
          </div>

          {/* My Story 3*/}
          <div className="flex justify-between flex-col-reverse md:flex-row mt-12 mb-24">
            <div className="md:mt-10 md:mb-10 md:w-full md:ml-32 md:text-base text-sm  lg:text-lg xl:text-xl mt-3 ml-10 mr-10 text-left">
            <p className="mt-4 md:mt-5">
            Currently, I am focus on creating projects that are 
            easily to management, and secure to provide users with the best possible experience when using websites.           
               </p>
              <p className="mt-4 md:mt-5">
              These are the tools I used in the past projects, 
              and I’am ready to learn new tools if they will help the project             
               </p>
              <p className="mt-4 md:mt-5 ">
              I hope to have the opportunity to work together.

              Thank you.     
               </p>
            </div>
            <div className="md:w-full flex justify-center items-center mr-10 ml-10 mt-5 mb-5">
              <img
                className="object-fit: cover"
                src="https://www.datocms-assets.com/38195/1607120999-tools.jpg?fm=webp"
                alt=""
              />
            </div>
          </div>

          {/* <div className="flex justify-center items-center bg-black w-full h-96">
            <h1 className="">I This Website  Build With React And Tailwind Css</h1>
          </div> */}


        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
