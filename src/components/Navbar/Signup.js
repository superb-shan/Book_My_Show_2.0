// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {

//   const history=useNavigate()

//   const[email,setEmail]=useState('') 
//   const[password,setPassword]=useState('')

//   async function submit(e){
//     e.preventDefault()
//     try{
//       await axios.post("http://localhost:3001/Signup",{email,password})
//       .then(res=>{
//         if(res.data!=="exist"){
//            toast.info("Successfully Signed Up !!! Login to continue",{
//             position: toast.POSITION.TOP_CENTER
//            })
//             history("/Login")
           
//         }
//         else if(res.data==="exist"){
//           toast.warning("Email already exists")
//             history("/Login")
            
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
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <form action="POST">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="fname"
//               type="text"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email} 
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
//               value={password} 
//               onChange={(e)=>{setPassword(e.target.value)}}
//             />
//           </div>
//           <input
//             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"  
//             onClick={submit}/>
//           {/* <Link to="/Login" > Sign Up</Link>
           
//           </button> */}
//         </form>
//         <p className="text-gray-700 mt-4">
//           Already have an account?{" "}
//           <Link to="/Login" className="text-red-600 font-bold">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    
    // Check if email already exists in local storage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      toast.warning("Email already exists");
      history("/login");
      return;
    }

    // Store user credentials in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    toast.info("Successfully Signed Up !!! Login to continue", {
      position: toast.POSITION.TOP_CENTER,
    });
    history("/Login");
  }

  return (
    <div className="bg-darkBackground-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form action="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fname"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email} 
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
              value={password} 
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <input
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"  
            onClick={submit}/>
          {/* <Link to="/Login" > Sign Up</Link>
           
          </button> */}
        </form>
        <p className="text-gray-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;