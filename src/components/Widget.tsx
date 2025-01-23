import React, { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import { connection, host } from "../utils/constants";
// import WidgetTop from "@/assets/widget_half_bg.svg";
// import WidgetBottom from "@/assets/widget_bottom.svg";
// import WarningIcon from "@/assets/warning-icon.svg";
// import UsdtIcon from "@/assets/usdt-icon.svg";
// import CardIcon from "@/assets/card-icon.svg";
// import BNBIcon from "@/assets/bnb.svg";
// import USDIcon from "@/assets/usd.svg";
import EthIcon from "../assets/solana.png";
import TokenIcon from "../assets/lyra.jpg";
import Web3Payments from "../assets/web3payments.svg";

const Widget = () => {
  const [activeTab, setActiveTab] = useState("eth");

  const rate = 0.0001;
  const [inputAmount, setInputAmount] = useState("");

  const { publicKey, sendTransaction, connected, disconnect } = useWallet();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeLeft = () => {
      const now = new Date(); // Get current time
      const target = new Date("2024-12-03T05:30:00"); // Parse the target time

      // @ts-expect-error subtracting dates
      const difference = target - now; // Get the difference in milliseconds

      // If the target date is in the past, stop the countdown
      if (difference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Convert to days
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24); // Convert to hours
      const minutes = Math.floor((difference / (1000 * 60)) % 60); // Convert to minutes
      const seconds = Math.floor((difference / 1000) % 60); // Convert to seconds

      setTime({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleCopyAddress = async () => {
    navigator.clipboard.writeText('F9ax9qQrFxcdy2sPsc3yVhf9XdNsTdf1zDQrVh2HDedW');
  }

  const handleBuy = async () => {
    try {
      const response = await fetch(`${host}/api/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyerPubkey: publicKey,
          // @ts-expect-error parseFloat() will return NaN, which causes problems
          tokens: inputAmount / rate,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const {
        base64Transaction,
        minContextSlot,
        blockhash,
        lastValidBlockHeight,
      } = data;
      const decodedTx = Buffer.from(base64Transaction, "base64");
      const transaction = Transaction.from(decodedTx);

      //Send Transaction
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
      console.log("info", "Transaction sent:", signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      console.log("success", "Transaction successful!", signature);
    } catch (error) {
      console.log("error", error);
    }
  };

  const [USDPrice, setUSDprice] = useState("1");
  const getCoinUSDprice = (coinId = "USD") => {
    if (coinId == "USD") {
      setUSDprice("1");
    } else {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-fn1QNCfAnMAB4yccJY3J5raa",
        },
      };

      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setUSDprice(data[coinId.toLowerCase()]["usd"]);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getCoinUSDprice("solana");
  }, []);

  function formatLargeNumber(number: number) {
    if (number >= 1000000) {
      // For millions: Divide by 1,000,000 and add 'M'
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1000) {
      // For thousands: Divide by 1,000 and add 'k'
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    // For numbers less than 1000: return with two decimal places
    return number.toFixed(2);
  }

  return (
    <div className="relative w-full max-w-[400px] z-[1] drop-shadow-[0_10px_6px_rgba(0,0,0,0.31)] bg-[#f7cb46]  rounded-xl  border-2 border-black">
      <div className="p-5">
        <p className="text-center text-black font-gs-eb text-xl mb-4">
          Buy $LYRA Presale
        </p>

        <div className="w-full mx-auto">
          {/* timer  */}
          <div className="text-[#fe7a13] flex items-center justify-between w-full counter bg-[#fff3] rounded-t-[15px]">
            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-black text-sm font-semibold leading-[30px] font-gs-sb">
                Days
              </div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.days < 10 ? `0${time.days}` : time.days}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-black text-sm font-semibold leading-[30px] font-gs-sb">
                Hours
              </div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.hours < 10 ? `0${time.hours}` : time.hours}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-black text-sm font-semibold leading-[30px] font-gs-sb">
                Minutes
              </div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-black text-sm font-semibold leading-[30px] font-gs-sb">
                Seconds
              </div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
              </div>
            </div>
          </div>

          <p className="bg-black text-white rounded-b-[15px] text-[11px] tracking-[1px] text-center py-[2px] uppercase font-gs-sb">
            Presale ends in
          </p>
{/* 
          <div className="text-black mt-3 mb-2 leading-[1] text-sm text-center">
            <span className="leading-[1] font-gs-sb font-semibold">
              $205,236
            </span>
            <span className="leading-[1] font-gs-sb font-semibold">
              {" "}
              / $3,000,000
            </span>
          </div> */}

          {/* Progess Bar  */}
          {/* <div className="w-full bg-gray-200 mb-5 overflow-hidden rounded-full h-3">
            <div
              className="bg-[#fe7a13] h-full rounded-full"
              style={{ width: `${(205236 / 3000000) * 100}%` }}
            ></div>
          </div> */}

          {/* <div className="flex justify-center items-center text-center mb-2 text-sm">
            <span className="leading-[1] uppercase mr-1 font-gs-sb font-semibold">
              Your purchased $LIGER
            </span>
            <span className="leading-[1] font-gs-sb font-semibold"> = 0</span>
            <button className="ml-2">
              <Image
                src={WarningIcon}
                alt="Warning Icon"
                width={21}
                height={20}
              />
            </button>
          </div> */}

          {/* <div className="flex justify-center items-center text-center mb-2 text-sm">
            <span className="leading-[1] uppercase mr-1 font-gs-sb font-semibold">
              Your stakeable $LIGER
            </span>
            <span className="leading-[1] font-gs-sb font-semibold"> = 0</span>
            <button className="ml-2">
              <Image
                src={WarningIcon}
                alt="Warning Icon"
                width={21}
                height={20}
              />
            </button>
          </div> */}
        </div>

        <div className="mt-3 w-full mx-auto">
          <p className="text-black relative tracking-[1.5px] text-sm text-center mb-2 font-gs-m before:content-[''] before:w-[20%] before:h-[1px] before:bg-[#eaeaea] before:absolute before:left-0 before:top-1/2 after:content-[''] after:w-[20%] after:h-[1px] after:bg-[#eaeaea] after:absolute after:right-0 after:top-1/2">
            1 $LYRA = {rate} SOL
          </p>

          {/* Tabs Btns  */}
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => setActiveTab("eth")}
              className={`w-full min-h-10 py-[9px] text-black rounded-[30px] text-[23px] font-semibold font-gs-sb flex items-center justify-center gap-2 uppercase border-2 ${
                activeTab === "eth"
                  ? "border-black bg-white"
                  : "border-transparent hover:border-black bg-[#bad3c180] hover:bg-white"
              } transition-all duration-200`}
            >
              <div className="w-[30px] h-[30px]">
                <img
                  src={EthIcon}
                  alt="Eth Icon"
                  height={30}
                  width={30}
                  className="w-auto block h-[30px]"
                />
              </div>
              <span className="leading-[1] pt-[3px]">SOL</span>
            </button>

            {/* <button
              onClick={() => setActiveTab("usdt")}
              className={`w-full min-h-10 py-[9px] text-black rounded-[30px] text-[23px] font-semibold font-gs-sb flex items-center justify-center gap-2 uppercase border-2 ${
                activeTab === "usdt"
                  ? "border-black bg-white"
                  : "border-transparent hover:border-black bg-[#bad3c180] hover:bg-white"
              } transition-all duration-200`}
            >
              <div className="w-[30px] h-[30px]">
                <Image
                  src={UsdtIcon}
                  alt="Usdt Icon"
                  height={30}
                  width={30}
                  className="w-auto block h-[30px]"
                />
              </div>
              <span className="leading-[1] pt-[3px]">USDT</span>
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6 md:gap-4">
            <div>
              {activeTab === "eth" && (
                <div>
                  <div className="text-black mb-1 flex items-center justify-between">
                    <label className="tracking-[1] text-[13px] block font-gs-m">
                      {"SOL"} you pay ($
                      {/* @ts-expect-error parseFloat() will return NaN, which causes problems */}
                      {formatLargeNumber(inputAmount * USDPrice)}):
                    </label>
                    {/* <div className="text-[13px] cursor-pointer text-[#2eb335] font-gs-m">
                      Max
                    </div> */}
                  </div>

                  <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-white">
                    <input
                      type="number"
                      placeholder="0"
                      className="text-black h-full flex-1 py-[2px] text-base font-gs bg-transparent border-none leading-[1] outline-none truncate w-full"
                      min={0}
                      value={inputAmount}
                      onChange={(e) => setInputAmount(e.target.value)}
                    />
                    <div className="">
                      <img
                        src={EthIcon}
                        alt="SOL Icon"
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* 
              {activeTab === "usdt" && (
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label className="tracking-[1] text-[13px] block font-gs-m">
                      Pay with USDT
                    </label>
                    <div className="text-[13px] cursor-pointer text-[#2eb335] font-gs-m">
                      Max
                    </div>
                  </div>

                  <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-white">
                    <input
                      type="text"
                      placeholder="0"
                      className="h-full flex-1 py-[2px] text-base font-gs text-[#eaeaea] bg-transparent border-none leading-[1] outline-none truncate w-full"
                    />
                    <div>
                      <Image
                        src={UsdtIcon}
                        alt="USDT Icon"
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "card" && (
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label className="tracking-[1] text-[13px] block font-gs-m">
                      Pay with USD
                    </label>
                    <div className="text-[13px] cursor-pointer text-[#2eb335] font-gs-m">
                      Max
                    </div>
                  </div>

                  <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-white">
                    <input
                      type="text"
                      placeholder="0"
                      className="h-full flex-1 py-[2px] text-base font-gs text-[#eaeaea] bg-transparent border-none leading-[1] outline-none truncate w-full"
                    />
                    <div>
                      <Image
                        src={USDIcon}
                        alt="USD Icon"
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              )} */}
            </div>

            <div>
              <div className="text-black mb-1 flex items-center justify-between">
                <label className="tracking-[1] text-[13px] block font-gs-m">
                  $LYRA You receive
                </label>
              </div>

              <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-white">
                <div className="h-full flex-1 py-[2px] text-base font-gs text-black bg-transparent border-none leading-[1] outline-none truncate w-full">
                  {inputAmount != "" ? parseFloat(inputAmount) / rate : "0"}
                </div>
                <div className="">
                  <img
                    src={TokenIcon}
                    alt="Token Icon"
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-white shadow-none w-[28px] h-[28px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex mb-4 justify-center">
            <button className="border-2 border-white hover:border-black hover:bg-white hover:text-black transition-all duration-200 rounded-[80px] text-[17px] font-gs-sb py-1 px-[15px] flex items-center justify-center text-center min-h-10 capitalize leading-[1]">
              Connect Wallet
            </button>

            <button className="border-2 border-white hover:border-black hover:bg-white hover:text-black transition-all duration-200 rounded-[80px] text-[17px] font-gs-sb py-1 px-[15px] flex items-center justify-center gap-2 text-center min-h-10 capitalize leading-[1]">
              <div className="w-[18px] h-[18px]">
                <Image src={BNBIcon} alt="BNB Icon" className="w-full h-full" />
              </div>
              Buy with BNB
            </button>
          </div> */}
          <div className="mt-[40px] w-full">
            {connected ? (
              <button
                onClick={() => handleBuy()}
                className="border-2 border-white hover:border-black hover:bg-white hover:text-black transition-all duration-200 mt-[10px] bg-[#39276F] relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]"
              >
                <p className="font-MavenPro font-[500]">Buy $LIGER</p>
              </button>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <WalletMultiButton />
              </div>
            )}

            {connected && (
              <button
                onClick={() => disconnect()}
                className="border-2 border-white hover:border-black hover:bg-white hover:text-black transition-all duration-200 mt-[10px] bg-[red] relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]"
              >
                <p className="font-MavenPro font-[500]">Disconnect Wallet</p>
              </button>
            )}
          </div>

          <div>
            {/* <button className="text-black underline text-[17px] font-gs-sb text-center w-full mt-4 mx-auto">
              Don&apos;t have a wallet?
            </button> */}
            <div className="text-black text-[17px] font-gs-sb text-center w-full mt-4 mx-auto">
              Trouble connecting? You can also send SOL to this wallet:
            </div>
            <button onClick={handleCopyAddress} className="text-black underline hover:text-opacity-70 text-[17px] font-gs-sb text-center w-full mt-4 mx-auto">
            F9ax9qQrFx.....QrVh2HDedW
            </button>
            <div className="text-sm text-center mt-4 flex items-center justify-center">
              <p className="text-black">Powered by</p>
              <div className="h-4">
                <img src={Web3Payments} alt="Web3Payments" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
