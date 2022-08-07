import Head from "next/head";
import {ConnectWButton, DisConnectWButton, ChainName, PageObserver, SwitchNetwork} from "../components/connect";
import { useDappContext } from '../lib/context'
import Header from "../components/Header";
import { ellipseAddress } from '../lib/utilities'
import Image, { StaticImageData } from 'next/image'
import landingPageSmall from '../public/images/landingPageSmallV1.png'
import landingPage from '../public/images/landingPageV1.png'
// import dynamic from "next/dynamic";
// const DisConnectWButton = dynamic( (()=>import('../components/connect')) as any,  { ssr: false},     )
  

export const Home = (): JSX.Element => {

    const { state, dispatch } = useDappContext()
    const { provider, web3Provider, address, chainId, isChainSupported } = state


  return (
  <div className="container w-screen  bg-customSky">
    <div className="text-black bg-blue min-h-screen">
      <Head>
      <title>Bonanza Turtle Club</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Bonanza Turtle Club" key="ogtitle" />
        <meta property="og:description" content="Community and mint page of Bonanza Turtle Club members. A community to take the metaverse project ahead" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://bonanzaturtleclub.com/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/coolTurtle.png" key="ogimage"/>
        <meta property="og:site_name" content="https://bonanzaturtleclub.com/" key="ogsitename" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BonanzaTurtleC" />
        <meta name="twitter:creator" content="@keshavkgunjan" />
        <meta name="twitter:title" content="Bonanza Turtle Club" key="twtitle" />
        <meta name="twitter:description" content="ommunity and mint page of Bonanza Turtle Club members. A community to take the metaverse project ahead" key="twdesc" />
        <meta name="twitter:image" content="https://bonanzaturtleclub.com/images/coolTurtle.png" key="twimage" />
      </Head>
      <Header />
    <div className="w-screen h-screen bg-customSky">

      <div className="relative w-screen h-screen max-h-min flex justify-center ">
       {/* <img className="w-screen absolute sm:hidden bottom-0  object-cover max-h-1/2 " alt="bs" src="/images/landingPageSmall.png" />*/}
       {/* <img className="w-screen absolute hidden sm:block bottom-0 object-cover  " alt="b" src="/images/landingPage.png" />  */}
       
       <div className="unset-img hidden sm:block relative w-screen h-screen">
       <Image className="w-screen absolute bottom-0 object-cover" layout="fill" alt="b" src={landingPage} priority /> 
       </div>
       <div className="unset-img block sm:hidden relative w-screen h-screen">
       <Image className="w-screen absolute bottom-0 object-contain" objectPosition="bottom" layout="fill" alt="b" src={landingPageSmall} priority /> 
       </div>
       {/* <div className="relative w-screen flex sm:hidden   "> 
       <Image
             src= {landingPageSmall}
             alt="bs"
             layout="fill" // required
             objectFit="contain" 
             objectPosition="bottom"
             priority
             />
        </div> */}


         {!web3Provider?
          <></>
               :
              <div className="absolute top-0 mt12 sm:mt-16 md:mt-20 items-center text-center w-full text-xs sm:text-sm lg:text-lg">
                  <div  className="flex flex-wrap items-start m-2 justify-between ">

                      <div className="text-left flex flex-row flex-wrap w-1/3">
                        <div >Connected to:&nbsp;</div>
                        <div className="font-bold truncate "><ChainName /></div> 
                        </div>
                      <div className="text-right flex flex-row flex-wrap w-1/3 justify-end">
                       <div className="align-middle"> Address:&nbsp; </div>
                      <p className="font-bold float-right ">{ellipseAddress(address)}</p>
                      <div  className=" float-right rounded-md shadow-xl ring-1 ring-black ring-opacity-10 focus:outline-none text-center ml-2 bg-white bg-opacity-75 " > <DisConnectWButton /> 
                      </div> 
                      </div>
                  </div>
                  {chainId?.toString() == '1' || chainId?.toString() === '0x1' ? <></>: 
                  <div  className="flex mt-5 bg-yellow-200 flex-wrap items-center align-middle justify-center text-xs "> 

                  🔥  Error!!! Wrong Chain  🔥
                <div className="border-2 border-black border-opacity-20 bg-yellow-100 rounded-lg m-1 p-1">
                  <SwitchNetwork />
                </div>
                  </div>
                  }
              </div>
         }

        <div className="absolute top-0 mt-32 sm:mt-48 md:mt-52 lg:mt-72 w-full justify-center items-center text-center flex flex-col" >
              <div className="m-2 pb-2 sm:pb-0 font-bold leading-10 font-Blueberry text-blue-900 text-4xl lg:text-6xl text-center max-w-xs lg:max-w-xl">
                Bonanza Turtle Club
              </div>
        <div className="text-sm text-center">
        {!web3Provider ?
            //   <div onClick = { async () => { login(); }} className="m-2 font-bold leading-6 font-mono">{displayConnectWallet()} </div>
            <ConnectWButton />
              :
              <div className="flex flex-row mt-5 font-bold leading-6 font-mono text-md  px-1 align-middle items-center justify-center"> 
              <div className="text-2xl ">⏳</div>
              <p className="rounded-md border border-gray-400 bg-white text-2xl p-1 ">Minting to start soon!!</p> 
              <div className="text-2xl ">⏰</div>
              </div>
        }
        </div>
        </div>
      

        <div className="absolute bottom-0 m-2 sm:hidden  justify-center items-center text-center z-30 block" >
         <ul className="flex flex-grow  justify-between flex-wrap items-center">
              <li className="rounded-full bg-gray-100 border-black border-2 mx-2 ">
              <a  href="https://discord.gg/xPyUvWNh84" >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/></svg>

              </a>
              </li>
              <li className="rounded-full bg-gray-100 border-black border-2  mx-2">
              <a href="https://twitter.com/BonanzaTurtleC" >
                  
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
    
                  </a>
              </li>
        </ul>
        </div>
        {!web3Provider?
          <></>
        :
        <PageObserver />
        }    
      </div>
    </div>
   </div>
  </div>
  );
}

export default Home
