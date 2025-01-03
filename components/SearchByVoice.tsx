"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SearchByVoice() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Use SWR to fetch the courses, filtering by the transcript (title_like)
  const { data, error } = useSWR(
    `http://localhost:3001/courses?title_like=${transcript}`,
    // https://jsonplaceholder.typicode.com/posts?q=${transcript},
    fetcher
  );

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcriptArray = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        setTranscript(transcriptArray); // Update transcript state with speech result
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  // Error handling
  if (error) return <div className="text-red-500">Error loading posts</div>;

  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Search Posts by Voice
      </h2>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          onClick={startListening}
          disabled={isListening}
        >
          {isListening ? "Listening..." : "Start Listening"}
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
          onClick={stopListening}
        >
          Stop Listening
        </button>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg text-gray-700">
          You said: <span className="text-gray-500">{transcript}</span>
        </h3>
      </div>
      <div className="space-y-4">
        {data ? (
          <ul className="space-y-2">
            {data.map((course: any) => (
              <li
                key={course.id}
                className="border p-4 rounded-lg shadow-sm bg-gray-50"
              >
                {/* Display only the title */}
                <h4 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h4>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading posts...</p>
        )}
      </div>
    </div>
  );
}
