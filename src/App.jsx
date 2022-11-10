import { useState } from "react";
import SocialMedia from "./components/socialMedia";

function App() {
  const [socialDisplay, setSocialDisplay] = useState("hidden");
  const [userNameDisplay, setUserNameDisplay] = useState("hidden");
  return (
    <div className="flex justify-between items-start">
      <SocialMedia />

      <div className="mx-5 w-1/4 bg-slate-400 p-5">
        <h3 className="text-center text-xl font-bold">Social Media</h3>
        <div className=" mt-5">
          <h3 className="text-lg font-semibold p-3 bg-slate-600 shadow-xl text-white rounded-md">
            Workspace 1
          </h3>
          <div className="ml-5 text-base font-semibold text-black rounded-md flex flex-col gap-4 mt-5">
            <div className="p-3 bg-orange-600 shadow-xl rounded-md">
              <ul className=" flex flex-col gap-2 ml-5">
                <li className=" bg-orange-700 pl-3 py-2 rounded-md text-white">
                  Page 1
                </li>
                <li className=" bg-orange-700 pl-3 py-2 rounded-md text-white flex justify-between items-center">
                  Database 1
                  <button
                className=" text-white text-lg"
                onClick={() => {
                  if (socialDisplay === "flex") {
                    setSocialDisplay("hidden");
                  } else {
                    setSocialDisplay("flex");
                  }
                  if (userNameDisplay === "flex") {
                    setUserNameDisplay("hidden");
                  }
                }}
              >
                +
              </button>
              <div
                className={`mt-2 ${socialDisplay} flex-col justify-start h-fit gap-2 bg-amber-500 mr-4 z-10 rounded-md`}
              >
                <button
                  className="p-2 text-white text-base hover:bg-amber-600 rounded-md cursor-pointer"
                  onClick={() => {
                    setSocialDisplay("hidden");
                    if (userNameDisplay === "flex") {
                      setUserNameDisplay("hidden");
                    } else {
                      setUserNameDisplay("flex");
                    }
                  }}
                >
                  Twitter
                </button>
                <div className="p-2 text-white text-base hover:bg-amber-600">
                  Facebook
                </div>
                <div className="p-2 text-white text-base hover:bg-amber-600 rounded-md">
                  Telegram
                </div>
              </div>
              <div
                className={`mt-2 ${userNameDisplay} flex-col justify-start h-fit gap-2 bg-amber-500 mr-4 z-10 rounded-md`}
              >
                <div className="p-2 text-white text-base hover:bg-amber-600 rounded-md">
                  twitter@username1
                </div>
                <div className="p-2 text-white text-base hover:bg-amber-600">
                  twitter@username1
                </div>
              </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <h3 className="text-lg font-semibold p-3 bg-slate-600 shadow-xl text-white rounded-md">
            Workspace 2
          </h3>
          <div className="ml-5 text-base font-semibold text-black rounded-md flex flex-col gap-4 mt-5">
            <div className="p-3 bg-orange-600 shadow-xl rounded-md">
              <ul className=" flex flex-col gap-2 ml-5">
                <li className=" bg-orange-700 pl-3 py-2 rounded-md text-white">
                  Page 1
                </li>
                <li className=" bg-orange-700 pl-3 py-2 rounded-md text-white">
                  Database 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
