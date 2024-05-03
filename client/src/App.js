import Login from "./pages/Login";
import Nav from "./pages/Nav";
import Dashboard from "./pages/Dashboard";
import Candidate from "./pages/Candidate";
import Voter from "./pages/Voter";
import ElectionCommission from "./pages/ElectionCommission";
// import { RouterProvider,createBrowserRouter,Navigate,Router,Routes, Route } from "react-router-dom";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {useState,useEffect} from 'react';
import "./App.css";
import {toast,Toaster} from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"





function App() {

  const [state,setState] =useState({
    provider:null,
    contract:null,
    signer:null
  });

  const [info,setInfo]= useState()

  const [pIdEc,setPIdEc] = useState({       //Pid is short for current poll id and Ec is for election commsion 
    pollId:null,
    EcAddress:null      
  })


  // const navigate = useNavigate();

  const setinfo = async(data)=>{
    setInfo(data)
  }

  const details = async(_pollId,_EcAddress) =>{
      setPIdEc({pollId:_pollId,EcAddress:_EcAddress})
  }

  const wallet =async(provider,contract,signer)=>{   //this function sets the provider and signer or EOA address of the client that has logged in 
    setState({provider:provider,contract:contract,signer:signer})
  }

  const handleCase =(name)=>{    //For converting the case , First letter upper case and rest lower case
    let temp = name.slice(0,1)
    let temp1 =  name.slice(1,name.length)
    temp = temp.toUpperCase()
    temp1 = temp1.toLowerCase()
    return (temp  + temp1)
  }

    const checkLogin= ()=>{
    // const stat = await state
    if(state.provider === null || state.contract === null  || state.signer === null ){
      toast.error("Please login again")
      // return <Navigate to="/" />
      // return false
    }
    return true;
  }
  
  useEffect(()=>{
    checkLogin()
  },[state])



  console.log("Logged in user Id", state.signer)
  // console.log(state)
  // console.log(pIdEc)
  // console.log(info)


  return ( 
    <>
    <div className="bg-slate-50 w-full h-screen dark:bg-slate-800  overflow-hidden transition-colors duration-700 ">
      
      <Nav />
    <Analytics />
    <SpeedInsights />
    <Router>
      <Routes>
        <Route path="/" element={<Login wallet={wallet} />} />
        <Route path="/Dashboard" element={<Dashboard state={state} info={info} details={details} setinfo={setinfo} pIdEc={pIdEc}  />} />
        <Route path="Candidate" element={<Candidate state={state} handleCase={handleCase} />} />
        <Route path="/Voter" element={<Voter state={state} handleCase={handleCase}  />} />
        <Route path="/ElectionCommission" element={<ElectionCommission state={state} handleCase={handleCase} />} />
      </Routes>
    </Router>


      <Toaster richColors position="top-center" closeButton />
    </div>
    </>
  );
}

export default App;



  // const router = createBrowserRouter([
  //   {path:"/",element:<Login wallet={wallet} />},
  //   {path:"/Dashboard",element:<Dashboard state={state} info={info} details={details} setinfo={setinfo} pIdEc={pIdEc}  />},
  //   {path:"/Candidate",element:<Candidate state={state} handleCase={handleCase} />},
  //   {path:"/Voter",element:<Voter state={state} handleCase={handleCase}  />},
  //   {path:"/ElectionCommission",element:<ElectionCommission state={state} handleCase={handleCase} />},
  // ])
    // {/* {checkLogin() ? <Navigate to="/Dashboard" /> :<Navigate to="/" />} */}
          // {/* <RouterProvider router={router} /> */}

// import Login from "./pages/Login";
// import Nav from "./pages/Nav";
// import Dashboard from "./pages/Dashboard";
// import Candidate from "./pages/Candidate";
// import Voter from "./pages/Voter";
// import ElectionCommission from "./pages/ElectionCommission";
// import { RouterProvider,createBrowserRouter } from "react-router-dom";
// import {useNavigate} from "react-router-dom"
// import {useState,useEffect} from 'react';
// // import {createClient,cacheExchange,fetchExchange} from "@urql/core"
// import "./App.css";




// function App() {

//   const [state,setState] =useState({
//     provider:null,
//     contract:null,
//     signer:null
//   });

//   const [info,setInfo]= useState()

//   const [pIdEc,setPIdEc] = useState({       //Pid is short for current poll id and Ec is for election commsion 
//     pollId:null,
//     EcAddress:null      
//   })


//   const setinfo = async(data)=>{
//     setInfo(data)
//   }


//   const details = async(_pollId,_EcAddress) =>{
//       setPIdEc({pollId:_pollId,EcAddress:_EcAddress})
//   }

//   const wallet =async(provider,contract,signer)=>{   //this function sets the provider and signer or EOA address of the client that has logged in 
//     setState({provider:provider,contract:contract,signer:signer})
//   }

//   const handleCase =(name)=>{    //For converting the case , First letter upper case and rest lower case
//     let temp = name.slice(0,1)
//     let temp1 =  name.slice(1,name.length)
//     temp = temp.toUpperCase()
//     temp1 = temp1.toLowerCase()
//     return (temp  + temp1)
//   }
  


//   const router = createBrowserRouter([
//     {path:"/",element:<Login wallet={wallet} />},
//     // {path:"/Dashboard",element:<Dashboard state={state} info={info} details={details} setinfo={setinfo}  />},
//     {path:"/Dashboard",element:<Dashboard state={state} info={info} details={details} setinfo={setinfo} pIdEc={pIdEc}  />},
//     {path:"/Candidate",element:<Candidate state={state} handleCase={handleCase} />},
//     {path:"/Voter",element:<Voter state={state} handleCase={handleCase}  />},
//     {path:"/ElectionCommission",element:<ElectionCommission state={state} handleCase={handleCase} />},
//   ])

//   console.log("Logged in user Id", state.signer)
//   // console.log(state)
//   // console.log(pIdEc)
//   // console.log(info)

//   const history = useNavigate();

//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       event.preventDefault();
//       history.push('/'); // Redirect to the login page on reload
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [history]);
//   return ( 
  
//     <div className="bg-slate-50 w-full h-screen dark:bg-slate-800  overflow-hidden transition-colors duration-700 ">
      
//       <Nav />
//       <RouterProvider router={router} />

//     </div>

//   );
// }

// export default App;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ^^^^^^^^^^^^^^^^^^^^^^^

// I have to see
// w-12
// h-6
// rounded-full
// p-1
// bg-gray-400
// dark:bg-gray-600
// relative
// transition-colors
// duration-500
// ease-in
// focus:outline-none
// focus:ring-2
// focus:ring-blue-700
// dark:focus:ring-blue-600
// focus:border-transparent

// bg-black text-white rounded-md p-2 hover:bg-stone-700 top-5 right-8


//   <RouterProvider router={router} />


// FIRST WE HAVE MAKE SECRUTY THAT WHEN USER LOGINS IN THAN ONLY HE CAN ACCESS THE DASHBOARD PAGE OR THE HOME PAGE WHILE TYPING URL
// const [walletConnected,setWalletConnected] = useState(false)

// function walletStatus(status){
//   setWalletConnected(status)
//   return walletConnected
// }

//<button className=" bg-[#4263EB] p-3 rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out">Connected to Wallet</button>



  // const handleCandList = (param)=>{
  //   setCandList([...candList,setCandList])
  //   console.log("this is called by the function in app.js file",)
  // }




  // {
//   ecWinners(first: 10, where: {_electionCommission: "0x44912CFc03622572448B2CD9f47988Ec8d745914" }) {
//     id
//     _info_pollId
//     _info_winnerName
//     _info_partyName
//     _electionCommission
//   }
//   candidates(first: 100, where: {_pollId: "3" ) {
//     id
//     _name
//     _party
//     _electionCommission
//     _pollId
//   }
//   voters(where: { _pollId: "3"}, first: 100) {
//     _name
//     _voterAdd
//     _pollId
//     _electionCommission
//   }
// }
// {
//   ecWinners(
//     first: 10
//     where: {_electionCommission: "0x44912CFc03622572448B2CD9f47988Ec8d745914"}
//   ) {
//     id
//     _info_pollId
//     _info_winnerName
//     _info_partyName
//     _electionCommission
//   }
//   candidates(first: 100, where: {_pollId: "3"}) {
//     id
//     _name
//     _party
//     _electionCommission
//     _pollId
//   }
//   voters(where: {_pollId: "3"}, first: 100) {
//     _name
//     _voterAdd
//     _pollId
//     _electionCommission
//   }
// }



//   const queryUrl = "https://api.studio.thegraph.com/query/55899/testing/version/latest";
//   const query = `{
//     ecWinners(
//       first: 10
//       where: {_electionCommission: "${pIdEc.EcAddress}"}
//     ) {
//       id
//       _info_pollId
//       _info_winnerName
//       _info_partyName
//       _electionCommission
//     }
//     candidates(first: 100, where: {_pollId:  "${pIdEc.pollId}"}) {
//       id
//       _name
//       _party
//       _electionCommission
//       _pollId
//     }
//     voters(where: {_pollId:  "${pIdEc.pollId}"}, first: 100) {
//       _name
//       _voterAdd
//       _pollId
//       _electionCommission
//     }
//   }
// `

//   const client = createClient({
//     url:queryUrl,
//     exchanges: [cacheExchange, fetchExchange]
//   })

  // const setinfo = async()=>{
  //   const {data}  =  await client.query(query).toPromise();
  //   console.log(data.candidates)
  //   setInfo(data)
  // }
  // useEffect(()=>{
  //   setinfo()
  // },[])



