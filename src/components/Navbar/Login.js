
// import axios from "axios";
// import React, { useState} from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";


// const Login = () => {

//   const history=useNavigate();

//   const[email,setEmail]=useState('') 
//   const[password,setPassword]=useState('')

//   async function submit(e){
//     e.preventDefault()
//     try{
//       await axios.post("http://localhost:3001/Login",{email,password})
//       .then(res=>{console.log(res)
//         if(res.data==="exist"){
//           toast.success("Successfully logged in")
//           //toast.error("user does not exist")
//           history("/")
            
//         }
//         else if(res.data==="not exist"){
//             //toast.success("Successfully logged in")
//             toast.error("Email/Password is wrong")
            
//         }
//     })
//     .catch(e=>{
//         alert("wrong details")
//         console.log(e);
//     })

//     }catch(e){
//         console.log(e)
//     }
//   }
   

//   return (
//     <div className="bg-darkBackground-700 min-h-screen flex flex-col items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Log In</h2>
//         <form action="POST">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e)=>{setEmail(e.target.value)}}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e)=>{setPassword(e.target.value)}}
//             />
//           </div>
//           <input
//             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//             onClick={submit}/>
//         {/* <Link to="/"> Log In</Link>*/}
           
//         {/* </button>  */}
//         </form>
//         <p className="text-gray-700 mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-red-600 font-bold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import axios from "axios";
import React, { useContext, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { NavbarContext } from "../../context/Navbar.context";


const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUserName, setIsLoggedIn} = useContext(NavbarContext);

  function submit(e) {
    e.preventDefault();
    // Check if user credentials are valid
    if (email === "shan.g2" && password === "sri") {
      setUserName("shan.g2");
      setIsLoggedIn(true);
      toast.success("Successfully logged in");
      history("/");
    } else {
      toast.error("Email/Password is wrong");
    }
  }

  // toast.info(<div className="text-gray-600"> Due to technical glitch use <br/> Email : <strong className="text-black"> shan.g2 </strong> <br/> Password : <strong className="text-black"> sri </strong> </div>, {
  //   position: "top-right",
  //   autoClose: false,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // })

  return (
    <div className="bg-darkBackground-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        {/* <div className="hidden">{toast.info(<div> Due to technical glitch use <br/> Email : <strong className="text-black"> shan.g2 </strong> <br/> Password : <strong className="text-black"> sri </strong> </div>)}</div> */}
        {/* <div className="hidden">
          {toast.info(<div> Due to technical glitch use <br/> Email : <strong className="text-black"> shan.g2 </strong> <br/> Password : <strong className="text-black"> sri </strong> </div>, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })}
        </div> */}
          {/* <div className="bg-red-600 text-white">
          Due to technical glitch use email : shan.g2 <br />password:sri </div> */}
          <div className="bg-[#363849] text-white rounded-md flex justify-center items-center flex-col mb-3 p-3"> <span>Due to technical glitch use </span>  <span>Email : <strong className=" ml-1"> shan.g2 </strong></span>  <span> Password : <strong className=" ml-1"> sri </strong> </span> </div>
        <form action="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <input
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submit}/>
        {/* <Link to="/"> Log In</Link>*/}
           
        {/* </button>  */}
        </form>
        <p className="text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-600 font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;









