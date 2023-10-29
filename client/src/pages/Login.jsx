import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import Abi from "../contracts/Abi.json";

const contractAdd = "0x1d50A75128E3295Df4cE9E5D5cc3AC5d02881134";

const Login = ({ wallet }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      if (window.ethereum.chainId === "0x13881") {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAdd, Abi.abi, signer);
          alert("Metamask connected");
          setWalletConnected(true);
          wallet(provider, contract, signer.address);
          navigate("/Dashboard");
        } catch (error) {
          console.error(error.message);
        }
      } else {
        alert("Please select MUMBAI test network");
      }
    } else {
      alert("Please install metamask");
    }
  };

  return (
    <div className="flex h-[90%] ">
      <div className="w-[50%] bg-slate-50 h-[90%] flex flex-col justify-center items-center flex-wrap dark:bg-slate-800 ">
        <div className="grid grid-rows-2 grid-flow-col w-[50%] ">
          <div>
            <h1 className=" text-[#4263EB] md:text-4xl  ">Voting Dapp</h1>
          </div>
          <div className="bg-yellow md:w-[90%] text-left ">
            <p className="font-extralight dark:text-white">
              A deccentralized Polling system for electing candidates in the
              election, build complelety using{" "}
              <span className="font-bold ">Blockchain Technology</span>.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[48%] h-[90%] bg-slate-50 flex justify-center items-center flex-col relative dark:bg-slate-800  ">
        <div className="bg-white w-[70%] h-[95%] flex flex-col justify-center items-center space-y-20  rounded-xl dark:bg-slate-900 shadow-2xl  dark:shadow-cyan-500/50  ">
          <div>
            <img
              className="h-[100%]  "
              src="https://voting-dapp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fsvg%2Flogo.b954829cff7fddca2bb11cc74a1876a5.svg&w=384&q=75"
              alt=""
            ></img>
            <h1 className=" text-[#4263EB] font-bold md:text-3xl  ">
              Votechain
            </h1>
          </div>

          <div>
            {walletConnected ? (
              <button className=" bg-[#4263EB] p-3 rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out">
                Connected to Wallet
              </button>
            ) : (
              <button
                className=" bg-[#4263EB] p-3 rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// localStorage.setItem("provider",JSON.stringify(provider))
// sessionStorage.setItem("contract",JSON.stringify(contract))
// sessionStorage.setItem("signer",JSON.stringify(signer))
// console.log(JSON.parse(localStorage.getItem("provider")))
// console.log(JSON.parse(sessionStorage.getItem("contract")))
// console.log((JSON.parse(sessionStorage.getItem("signer"))).address)
// console.log( typeof provider)
// console.log(signer.address)
// console.log(contract)

// Storage.prototype.setObject = function(key, value) {
//   this.setItem(key, JSON.stringify(value));
// }
// wallet(provider,JSON.parse(sessionStorage.getItem("contract")),JSON.parse(sessionStorage.getItem("signer")))
