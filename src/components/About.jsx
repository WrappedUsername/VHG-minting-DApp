import React from "react"

// about component
const About = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-about">
      <div className="flex flex-col items-center justify-between md:p-20 py-12 px-4">
        <p className="text-3xl text-white break-words text-gradient mb-10">
          Meet the team! Currently Voxel Helos Genesis is a one person project.
        </p>

        <figure className="md:flex rounded-xl p-8 md:p-0 ">
          <img
            className="flex w-auto h-auto md:w-48 h-64 rounded-[14px] md:rounded-[14px] shadow-[#4dfad7] shadow-lg mx-auto"
            src="../images/WrappedUsername.png"
            alt="WrappedUsername"
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-white text-lg font-medium">
                “I began my crypto journey late in the year 2018 after I
                completed building my first custom PC. I tried to mine Vertcoin
                with my custom PC, I did not earn much with mining so I decided
                to just make small investments into Bitcoin, a couple years
                later I joined OpenSea February 2021. I really enjoy art and I
                decided to start to learn how to develop Andriod apps using
                Kotlin. I quickly realized my best plan of action would be to
                create NFT projects to leverage my art skills with blockchain
                programming skills. After starting this project I wanted to
                learn how to program secure smart contracts, so I also started
                to learn cyber security/solidity security. I love art, but I
                also love learning new skills, this is my first DApp and NFT
                project with a smart contract, so this is just the genesis of
                much more to come!”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-[#4dfad7]">WrappedUsername</div>
              <div className="text-white text-gradient">
                Full-Stack Blockchain Developer/Solidity Security Specialist
              </div>
            </figcaption>
          </div>
        </figure>

        <p className="text-lg text-white break-words  mt-10">
          Voxel Helos Genesis began from a one-of-one art piece I created for my
          other NFT project Voxel Jets. I think DAO's are a great idea, and
          staking rewards are very nice indeed! So my plan for this project is
          to create a staking contract that rewards a governance token to be
          used with the Voxel Helos DAO. There is always the posibility to
          expand these voxel assets beyond just images, it depends on how well
          this project does, but in game voxel assets are possible, but that
          might require a bigger team!
        </p>
      </div>
    </div>
  );
};

export default About;
