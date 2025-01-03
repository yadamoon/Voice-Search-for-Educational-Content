"use client";

import { useSpeechToText } from "../utils/useSpeechToText";

export default function SpeechToText() {
  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText();

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Speech-to-Text</h1>
      <div className="mb-4">
        <p className="text-gray-700 font-medium">Transcript:</p>
        <div
          className="mt-2 p-4 bg-white rounded border"
          style={{ minHeight: "100px" }}
        >
          {transcript || (
            <span className="text-gray-400">Speak something...</span>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={startListening}
          disabled={isListening}
          className={`px-4 py-2 text-white ${
            isListening ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } rounded-md`}
        >
          Start Listening
        </button>
        <button
          onClick={stopListening}
          disabled={!isListening}
          className={`px-4 py-2 text-white ${
            !isListening ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
          } rounded-md`}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
}
