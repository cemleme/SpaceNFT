import Moralis from 'moralis';
import { useCallback, useEffect, useState } from "react";

const serverUrl = "https://9jwlufwrttxr.usemoralis.com:2053/server";
const appId = "dYs1HPZBZwkTGBMw4ksfWnvpE5BZ6nT13LfPmHuU";

const useMoralis = () => {
  const [user, setUser] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    Moralis.start({ serverUrl, appId });
  }, []);

  const login = async () => {
    let moralisUser = Moralis.User.current();
    if (!moralisUser) {
        moralisUser = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (moralisUser) {
          console.log("logged in user:", moralisUser);
          console.log(moralisUser.get("ethAddress"));
          setUser(moralisUser);
          setUserAddress(moralisUser.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  };

  const logout = async () => {
    await Moralis.User.logOut();
    console.log("logged out");
    setUser(null);
    setUserAddress(null);
  };

  return { login, logout, user, userAddress };
};

export default useMoralis;
