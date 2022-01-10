import { useMoralis } from "react-moralis";
import { useCallback, useEffect, useState } from "react";
import abi from "../constants/abi.json";

const contractAddress = "0xc4885978C12b46db27012193CE6890Df23a2B896";

const useContract = () => {
  const [contract, setContract] = useState(null);
  const { web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError } = useMoralis()

  useEffect(()=>{
    if(!isWeb3Enabled){
        enableWeb3();
    }
    else {
        setContract(new web3.eth.Contract(abi, contractAddress));
    }
  }, [isWeb3Enabled])

  return { contract };
};

export default useContract;
