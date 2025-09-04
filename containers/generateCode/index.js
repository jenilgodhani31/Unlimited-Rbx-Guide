import Ads from '@components/Ads';
import React, { Fragment, useState } from 'react'

function GenerateCode() {
  const [isOpen, SetIsOpen] = useState(false)
  const [giftCode, setGiftCode] = useState('')

  function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
      code += characters[Math.floor(Math.random() * characters.length)];
      // Add a space after every 4 characters, except at the end
      if ((i + 1) % 4 === 0 && i < 15) {
        code += ' ';
      }
    }
    return code;
  }
  function handelClick() {
    const newCode = generateCode();
    setGiftCode(newCode)
    SetIsOpen(true)
  }
  return (
    <Fragment>
      <div className="mx-auto  ls:w-[360px]  bg-white">

        <div className="flex flex-col  justify-center pt-10 px-5 pb-5">

          <Ads display={true} data-ad-slot="2593755237" />

          <div className=" text-black  font-bold pb-2 text-[25px]">
            How to Generate Gift Card Codes in Roblox: A Complete Guide
          </div>

          <p className="pt-5 text-primary4">Roblox is an online gaming platform that allows users to create and play games made by others.</p>

          <p className="text-center text-[22px] pt-5"> Gift Card Generator</p>
          <div className="flex item-center  justify-center">
            <button type="button" onClick={() => handelClick()} className="bg-primary5  rounded-md flex items-center justify-between text-white px-8 py-2 font-bold text-[20px] mt-5">
              Generate Code
            </button>
          </div>
          {isOpen && (
            <p className="pt-5 flex-col text-center text-[22px] text-primary6">Seu código de gift card é:<samp className="font-bold"> "{giftCode}" </samp></p>
          )

          }

          <p className="pt-5 text-primary4">One of the ways to enrich the in-game experience is through gift cards, which offer Robux, exclusive items and much more.</p>
          <p className="pt-5 text-primary4">In this article, we'll explore how to generate gift card codes on Roblox, as well as tips for avoiding fraud.</p>

          <div className=" text-black pt-5 font-bold  text-[24px]">
            What are Roblox Gift Cards?
          </div>

          <a href='/visit'>
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Redeem Free Robux

              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>

          <p className="pt-5 text-primary4">Roblox gift cards are prepaid cards that can be used to buy Robux (the game's virtual currency) or exclusive items on the platform. They are a great way to give gifts to friends or even to yourself.</p>

          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Where to buy Gift Cards?
          </div>
          <p className='pt-5 text-primary4'>Roblox gift cards can be purchased in various stores, both physical and online. You can find them at</p>

          <ul className="list-disc list-outside pl-5 text-primary4">
            <li className="pt-2">
              Electronics stores
            </li>
            <li className="pt-2">
              Supermarkets
            </li>
            <li className="pt-2">
              Games stores
            </li>
            <li className="pt-2">
              E-commerce sites such as Amazon and eBay
            </li>
          </ul>



          <div className=" text-black pt-5 font-bold pb-2 text-[26px]">
            E-commerce sites such as Amazon and eBay
          </div>
          <p className='pt-5 text-primary4'>Unfortunately, there is no legitimate way to generate Roblox gift card codes for free. Many sites that claim to offer this functionality are usually fraudulent and could put your account at risk. Here are some safe options:</p>

          <div className=" text-black pt-5 font-bold pb-2 text-[22px]">
            1. Participate in Promotions
          </div>
          <p className='pt-5 text-primary4'>Roblox sometimes runs promotions that include the distribution of gift cards. Keep an eye on social media and the official Roblox website so you don't miss out on these opportunities.</p>


          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            2. Buy Gift Cards
          </div>

          <p className="pt-5 text-primary4">The safest way to get a gift card is to buy it directly from authorized stores. That way, you can be sure you're getting a legitimate code.</p>

          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            3. Events and Competitions
          </div>

          <p className="pt-5 text-primary4">Keep an eye out for events and competitions organized by the Roblox community. Sometimes you can win gift cards as prizes.</p>

          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Tips to Avoid Fraud
          </div>

          <p className="pt-5 text-primary4">When looking for gift card codes, it is essential to be careful. Here are some tips to avoid scams:</p>

          <ul className="list-disc list-outside pl-5 text-primary4">
            <li className="pt-2">
              <strong>Don't trust unknown websites</strong>
              Many sites promise free codes, but these can be traps.

            </li>
            <li className="pt-2">
              <strong>Check authenticity:</strong>
              Always buy gift cards from authorized resellers.
            </li>
            <li className="pt-2">
              <strong>Never give out personal information</strong>
              Avoid sites that ask for sensitive information in exchange for codes.
            </li>
          </ul>

          <Ads
            data-ad-slot="3067284912"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <div className=" text-black pt-5 font-bold  text-[24px]">
            How to Use a Gift Card in Roblox
          </div>

          <p className="pt-5 text-primary4"><strong>1. Log in to your Roblox account: </strong> Log in to the official website or the app. </p>
          <p className="pt-5 text-primary4"><strong>2. Go to the redemption page: </strong>Click on "Robux" or go to the redeem codes section. </p>
          <p className="pt-5 text-primary4"><strong>3. Enter the gift card code: </strong>Enter the code and click on "Redeem". </p>
          <p className="pt-5 text-primary4"><strong>4.Confirm redemption </strong>After confirmation, the Robux or items will be added to your account. </p>
         
                    <div className=" text-black pt-5 font-bold  text-[24px]">
           Conclusion
          </div>
               <p className="pt-5 text-primary4">Although the idea of generating Roblox gift card codes may seem tempting, it's crucial to remember that there are no legitimate methods for doing so. The best approach is to buy gift cards from reliable sources or take part in promotions and events. That way, you can guarantee the security of your account and get the most out of your Roblox experience.</p>
          <a href="/visit"
          className="flex items-center justify-center"
          >
            <button className="bg-primary5  rounded-md flex items-center justify-between  text-white px-4 py-2 font-bold text-[22px] mt-5">
             New Free Robux Codes
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>
          <p className=" text-primary4 pt-5">We hope this guide has helped you better understand gift cards in Roblox!</p>
        </div>

      </div>
    </Fragment>
  )
}

export default GenerateCode 
