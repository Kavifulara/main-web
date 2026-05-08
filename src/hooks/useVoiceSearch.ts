import { useEffect, useState } from "react";

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  start: () => void;
}

interface SpeechRecognitionEvent extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

type UseVoiceSearchReturn = {
  listening: boolean;
  startListening: () => void;
};

// ✅ Extend Window interface
declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
    recognition?: SpeechRecognition;
  }
}

const useVoiceSearch = (
  setQuery: (text: string) => void,
  onSearch?: (text: string) => void
): UseVoiceSearchReturn => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const SpeechRecognitionClass =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognitionClass) return;
    
    const recognition = new SpeechRecognitionClass();

    recognition.continuous = false;
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      onSearch?.(transcript);
    };

    // store safely
    (window as Window & { recognition?: SpeechRecognition }).recognition =
      recognition;
  }, [setQuery, onSearch]);

  const startListening = () => {
    const recognition = (window as Window & {
      recognition?: SpeechRecognition;
    }).recognition;

    recognition?.start();
  };

  return { listening, startListening };
};

export default useVoiceSearch;