// src/types/speech-recognition.d.ts

declare global {
    interface SpeechRecognitionResult {
        isFinal: boolean;
        [key: number]: SpeechRecognitionAlternative;
    }

    interface SpeechRecognitionAlternative {
        transcript: string;
        confidence: number;
    }

    type SpeechRecognition = typeof window.SpeechRecognition | typeof window.webkitSpeechRecognition;

    interface SpeechRecognitionEvent extends Event {
        results: SpeechRecognitionResult[];
    }
}

export { };
