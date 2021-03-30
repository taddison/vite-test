import React, { useState } from "react";
import "./fonts.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full">
      <Header />

      {/* Main */}
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Asking{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-700 to-purple-400 italic">
              "What's Wrong Baby"
            </span>{" "}
            all the time?
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Not any more - we've got your back. Tell us your little
            troublemaker's name and we'll tell you what's wrong.
          </p>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2">
                I have no idea what's wrong with
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="text"
                placeholder="Darling Baby"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Put me out of my misery!
              </button>
            </div>
          </form>
        </div>

        {/* Right Col */}
        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <div className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
            <div className="shadow-lg rounded-2xl p-4 bg-white relative overflow-hidden">
              <p className="text-gray-800 text-3xl font-medium mb-2">💩 Poop</p>
              <p className="text-gray-400 text-lg">
                As much as she might be a little darling, Darling Baby poops
                just like everyone else. Have you checked that, because that's
                probably what is wrong with baby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
