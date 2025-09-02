import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Ads from "@components/Ads";

const Modal = dynamic(() => import("@components/model"), { ssr: false });
function Home() {
  const [isOpen, setIsOpen] = useState(true)



  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsOpen(true);


  }, []);



  return (
    <Fragment>

      <div className="mx-auto  ls:w-[360px]  bg-white">


        <div className="flex flex-col  justify-center pt-10 px-5 pb-5">
          <Ads display={true} data-ad-slot="2593755237" />

          {/* 
          <div className="pt-5 font-bold">
            <div className="font-bold text-[30px] md:text-[25px]">Download App and get Free 5000 Diamond 💎</div>
            <a href="https://play.google.com/store/apps/details?id=com.skintool.diamond.newemote">
              <div >
                <img src="/gameImage/unnamed.png" className="h-[200px] mt-5" />
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.skintool.diamond.newemote">
              <div className="flex item-center  justify-center pt-5">
                <button type="button" className="btn btn-pulse  bg-primary5 rounded-md flex items-center justify-between text-white  px-4 py-2 font-bold md:text-[20px]  mt-5">
                  INSTALL APP 💎
                </button>
              </div>
            </a>


            <p className='pt-5 text-primary4'><strong className="text-[20px] md:text-[18px]">Step 1 : </strong> Click the above button to download the App.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 2 : </strong> Open the App and use it for 5 Days.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 3 : </strong>  After the Completion of the 5th Day You will get redemption.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 4 : </strong> You just have to copy and paste it to our site for redemption And you get 5000 Diamond 💎 in your Free Fire Account.
            </p>

          </div> */}

          <div className=" text-black  font-bold pb-2 text-[25px] pt-5">
            How to Earn Robux in Roblox: Tips and Tricks
          </div>
          <p className="text-primary4 text-[14px] text-left pb-[25px]">
            Roblox is one of today's most popular games. Thanks to all the freedom and creativity the game contains, it has managed to create a real frenzy.
          </p>

          <a href="/visit">
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Redeem Free Robux
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>

          <div className="flex items-center justify-center px-2">
            <a href="/freefire">
              <button className="bg-primary5  rounded-md px-10 flex items-center justify-center  text-white px-4 py-2 font-bold text-[20px] mt-5">
                petratrucoff
                <span className="ml-2 flex items-center">
                  <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
                </span>
              </button>
            </a>
          </div>


          <p className="pt-5 text-primary4">If you want to know how to get Robux and skins in Roblox without paying anything, then this post is for you. Roblox is a sandbox-style game that allows players to create games within the platform, and each server can support up to 100 players.</p>
          <p className="pt-5 text-primary4">As the platform (in this case Roblox) is free, you can use Robux, the platform's virtual currency, to buy cosmetics and game passes.</p>

          <Ads
            data-ad-slot="3067284912"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <p className="pt-5 text-primary4">The customization possible thanks to Robux allows you to stand out from the crowd, keep your character as stylized as possible and make it easier to complete and progress in the game.</p>

          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            How to Earn Robux for Free
          </div>
          <p className=" text-primary4">Robux is generally available for purchase directly from the Roblox website or app. Either using a gift certificate, credit card or app store balance (Play Store, App Store). Roblox itself says that this is the only way to get currency, but this is not 100% true, as there are ways to get Robux and Roblox skins for free, as you can see below.</p>
          <p className="pt-5  text-primary4"> <strong>Beware of scammers! </strong>When visiting sites other than the official Roblox site, don't give out any personal information, especially financial information. Also, stay away from hacks and cheats that promise to unlock your Robux. After all, they are nothing more than scams that infect your phone and computer, steal your data and wreak havoc.</p>
          <p className="pt-5 text-primary4"> In addition to all the problems caused by viruses on your cell phone or computer, you can also kiss your Roblox account goodbye if you get caught using cheats.</p>

          <div className=" text-black pt-5 font-bold pb-5 text-[26px]">
            Free Robux?
          </div>

          <img src="/gameImage/image.jpg" />
          <p className=" text-center pt-5 text-primary4">Robux for free - Reproduction/Google</p>
          <p className=" pt-5  text-primary4">As mentioned above, the game claims that there's no other way to get Robux in Roblox than to buy it, which isn't exactly true. After all, the platform itself has a way of giving players Robux. These methods are described in more detail below.</p>
          <p className=" pt-5 text-primary4">In addition to the platform's rewards, there is also a way to get your Robux through the app to earn balance. Apps that provide users with prepaid cards, cash, Google Play balance, gift vouchers, etc.</p>
          <p className=" pt-5 text-primary4">These are applications that help you buy Robux and are not hacks or cheats of any kind. Therefore, the integrity of the account is guaranteed. Below are some apps that also offer this option.</p>


          <div className=" text-black pt-5 font-bold text-[26px]">
            How to earn Robux with Roblox itself
          </div>
          <p className="pt-5 text-primary4">The Roblox platform itself has a system that rewards users with Robux. We say there's no way to earn Robux for free, but it's all possible by sharing Roblox affiliate links, creating games and methods that require you to pay an investment, see below.</p>

          <div className=" text-black pt-5 font-bold  text-[24px]">
            Affiliates
          </div>

          <p className="pt-5 text-primary4">Roblox has an affiliate system, but many people aren't aware of it. This system allows users to get Robux for free. It's quite simple to use. Just share the link to the item in the store. A certain amount of Robux will be awarded when someone buys using the link.</p>
          <p className="pt-5  text-primary4">However, it is important to be careful. You should get an affiliate link, not just copy the product link and expect to get paid when the product is bought. Affiliate links track who shares them. That's worth emphasizing. To get the link, with your account connected to the Roblox website, use the link generated from the share buttons on social networks.</p>
          <p className="pt-5 text-primary4">A good strategy for increasing sales is to promote your product on social networks such as Instagram, TikTok, Kwai, Youtube, among others, and create a video in which you insert your affiliate link. This practice works for both store items and games. Use and abuse your creativity to promote your affiliate links.</p>

          <div className=" text-black pt-5 font-bold pb-2 text-[25px]">
            Create Your Roblox Game
          </div>
          <img src="/gameImage/rbxImageOne.png" />
          <p className="pt-5 text-center text-primary4">Roblox Game Creation Tool - Roblox Studio - Playback/Google</p>
          <p className="pt-5 text-primary4">A great way to win Roblox is to make games within Roblox. Roblox is just a platform that provides a set of tools for creating games. And the platform rewards those who create these games.</p>
          <p className="pt-5 text-primary4">However, to make a lot of money on Robux, your game needs to be popular. This may be necessary when practicing the previous topic of promoting your game on social networks.</p>
          <p className="pt-5 text-primary4">It may seem a bit complicated, but Roblox has many tools that allow you to create games without any programming knowledge. Everything is very intuitive and often done with a click-and-drag system.</p>
          <p className="pt-5 text-primary4">This is not only a great time to create Robux, but perhaps it's also a great time to discover your vocation, practice your creativity and maybe start a new career as a game developer.</p>

          <div className=" text-black pt-5 font-bold  text-[24px]">
            Game Pass Sale
          </div>
          <p className="pt-5 text-primary4">Once the game is ready, each player you bring onto the platform will be rewarded, as explained above, but if you want to increase Robux's revenue in your game, it's best to take advantage of the game pass sales option.</p>
          <p className="pt-5 text-primary4">The Game Pass system offers players advantages and decorations in Roblox games. You can earn a percentage of sales by promoting your Game Pass and encouraging players to buy it.</p>
          <p className="pt-5 text-primary4">The value of the Game Pass is up to you. Look for values that are as close as possible to the reward so that the player's purchase isn't unrealistic and you also get a positive return.</p>




          <div className=" text-black pt-5 font-bold  text-[24px]">
            Sell Your Creations on the Market
          </div>
          <p className="pt-5 text-primary4">If creativity is your strong suit and you can draw well, a great way to earn Robux in Roblox is to sell the items you create on the market.</p>
          <p className="pt-5 text-primary4">This method requires a premium membership. By itself the player is already rewarded with his Robux, but the player has to make a payment. A premium membership allows you to market and sell your creations.</p>


          <a href="/visit">
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Redeem Free Robux
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>


          <a href="/freefire">
            <div className="pt-5" >
              <img src="/gameImage/rbxImageTwo.webp" className="h-[200px]" />
            </div>
          </a>
          <p className="pt-5 text-primary4"> Now that you've discovered the secrets of free diamonds in Free Fire and understand why these methods are essential to enhancing your gaming experience, it's time to take action! Don't waste any more time! Click on the button below and find out everything!</p>

        </div>

      </div>

      {/* {isOpen && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Ads display={true} data-ad-slot="2593755237" />
        </Modal>
      )} */}
    </Fragment>
  );
}

export default Home;
