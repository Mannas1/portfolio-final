
const Home = () => {
  return (
    <div className="w-screen flex flex-row justify-center">
      <div className=" w-3/4">
        <div className="flex">
          <img src="/pfp2.png" alt="" width={200} className="rounded-md mt-5" />
          <div className=" pt-10 pl-2">
          <a href="https://www.linkedin.com/in/mannasnarang/"><img src="/linkedin-logo.png" alt="" width={50} height={50}/></a>
          <a href="https://twitter.com/_mannas"><img src="/twitter-logo.png" alt="" width={50} height={50}/></a>
          <img src="/youtube-logo.png" alt="" width={50} height={50}/>

          </div>
        </div>

        <h3 className="mt-5">Hi, I’m Mannas - 18yo <span className="text-blue-700"> full stack web developer</span> currently a 1st year student pursuing online bachelors in data science
          and artificial intelligence

          <br></br>I dropped out of my offline degree to focus on building my skills and also to solve problems using AI

        </h3>

        <div className=" mt-10 flex items-center justify-between ">
          <div>
            <h2 className="text-2xl">My tech stack :-</h2>
            <ul className="list-disc list-inside">
              <li>Reactjs</li>
              <li>Express, Nodejs</li>
              <li>React Native</li>
              <li>Rust (web3 - solana)</li>
              <li>Nextjs</li>
            </ul>
          </div>
          <div className=" w-96 border border-black rounded-xl h-24 ml-96 flex justify-center items-center p-6">
          btw I also have a tech blog, click here to know more about it :)
          </div>
        </div>

        <div className=" mt-20 flex justify-center w-full ">
          <h1 className="text-3xl underline">Projects</h1>
         
        </div>
        <div className="flex w-full justify-center mt-2">
        <p>click on the project to get more info</p>
        </div>
        <div className=" w-full h-auto  justify-evenly">
          <div className=" h-20 w-full border border-black rounded-lg mt-10 flex justify-center items-center">
            <a href="https://github.com/Mannas1/social-media-app">A Social Media Website like instagram with infinite scrolling using react query</a>
          </div>
          <div className=" h-20 w-full border border-black rounded-lg mt-10 flex justify-center items-center">
            <a href="https://github.com/Mannas1/Scrappy.github.io">A website for a discord bot</a>
          </div>
          <div className=" h-20 w-full border border-black rounded-lg mt-10 flex justify-center items-center">
            <a href="https://github.com/Mannas1/Desurance">A web3 backup wallet that prevents your funds from getting lost</a>
          </div>
          <div className=" h-20 w-full border border-black rounded-lg mt-10 flex justify-center items-center">
            <a href="https://github.com/Mannas1/tshirt-customizer">Tshirt customizing website using ThreeJS</a>
          </div>
          <div className=" h-20 w-full border border-black rounded-lg mt-10 flex justify-center items-center">
            <a href="https://github.com/HeroHire-TechHacks/frontend-interview-webapp">Platform where interviewer can give an interview to AI that evaluates the inital rounds of the process</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home