import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaComments,FaForward ,FaRegWindowMaximize,FaRegPlayCircle,FaPhone } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube,FaGift ,FaSwatchbook,FaHandsHelping} from "react-icons/fa";

function Hamburger() {

  var styles = {
    bmBurgerButton: {
       position: 'relative',
      width: '25px',
      height: '20px',
      right: '-20px',
      top: '5px'
    },
    bmBurgerBars: {
      background:" white"
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '30px',
      width: '30px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '20%'
    },
    bmMenu: {
      background: 'white',
      // padding: '2.0em 0.5em ',
      fontSize: '1.05em',
      color:'black'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'text-gray-950 ',
      // padding: '0.7em'
    },
    bmItem: {
      display: 'flex',
      alignItems: 'center',
       padding: '0.7em',
      // justifyContent:'center'
      
      
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    
    <Menu styles={styles} right>
      <div className="bg-current ">
      <h1 className="text-slate-50">Hey!</h1></div>  
      <br />
      <div className="  bg-slate-100 bg-auto  border-b-[1.4px]  hover:text-red-600 ">
      <a id="home" className="" href="/">  <FaComments className="inline"/> <> &nbsp; Notification center</> </a> 
       </div>  
      <div className="h-50 bg-slate-100 bg-auto border-b-[1.4px]  hover:text-red-600 ">
      <a id="home" className="" href="/Signup">
      <FaForward className="inline"/><> &nbsp; Login/Signup</>
      </a> 
      </div> 

      <div className="h-50 bg-slate-100 bg-auto  border-b-[1.4px]  hover:text-red-600 ">
      <a id="home" className=" " href="/movie/527833">
      <FaSwatchbook className="inline"/><>&nbsp; Your Orders</>
      </a> 
      </div> 

      <div className="h-50 w-100 bg-slate-100 bg-auto border-b-[1.4px]  hover:text-red-600 ">
      <a id="home" className=" " href="/movie/527833">
     <FaRegWindowMaximize className="inline"/><>&nbsp; Movies</>
      </a> 
      </div>  

      <div className="h-50 bg-slate-100 bg-auto border-b-[1.4px]  hover:text-red-600 ">
      <a id="home" className="0" href="/tv">
      <FaRegPlayCircle className="inline"/><>&nbsp; TV Shows</>
      </a> 
     </div>  

      <div className="h-50 bg-slate-100 bg-auto border-b-[1.4px]   hover:text-red-600 ">
      <a id="home" className=" " href="/https://support.bookmyshow.com/support/home">
      <FaPhone className="inline"/><>&nbsp; Contact</>
      </a> 
      </div>  

      <div className="h-50 bg-slate-100 bg-auto border-b-[1.4px]   hover:text-red-600 ">
      <a id="home" className=" " href="https://in.bookmyshow.com/my-profile/rewards">
      <FaGift className="inline"/><>&nbsp; Rewards</>
      </a> 
      </div> 

      <div className="h-50 bg-slate-100 bg-auto   hover:text-red-600 ">
      <a id="home" className=" " href="https://support.bookmyshow.com/support/home">
      <FaHandsHelping className="inline"/><>&nbsp; Help & Support</>
      </a> 
      </div> 

      <br />
      <br />


      <div className="flex flex-col lg:w-1/4 mt-6 lg:mt-0 ">
            <div className="text-black text-lg  w-[150px] pl-[60px] font-semibold mb-4">Follow Us</div>
            <div className="flex gap-4 pl-[100px]">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-black text-2xl hover:text-red-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"> 
                <FaTwitter className="text-black text-2xl hover:text-red-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-black text-2xl hover:text-red-400" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" >
                <FaYoutube className="text-black text-2xl hover:text-red-400" />
              </a>
            </div>
          </div>  
    </Menu>
   
    
  );
}


export default Hamburger;



