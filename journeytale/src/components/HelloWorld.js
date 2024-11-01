import React from "react";

function HelloWorld() {
    return (
      <div className="flex flex-col items-center h-screen bg-indigo-200">
        <div className="mt-10 text-center">
            <h1 className="text-4xl font-bold text-blue-500 font-serif">Welcome to JourneyTale!</h1>
            <p className="mt-4 text-lg text-gray-700 font-serif">
                Your journey begins here. Track your adventures, document your quests, and become the hero of your own story!
            </p>
        </div>
      </div>
    );
  }

export default HelloWorld;