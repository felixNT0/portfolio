import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from "@google/genai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FaMinus,
  FaPaperPlane,
  FaRobot,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import "regenerator-runtime/runtime";
import { db } from "../firebaseConfig";

// --- Configuration ---

const GEMINI_API_KEY =
  process.env.REACT_APP_GEMINI_API_KEY || "[ENCRYPTION_KEY]";

// --- System Prompt Construction ---
const SYSTEM_PROMPT = `
You are Felix's elite Architect AI. Your goal is to represent Felix in a professional, world-class manner.

CONVERSATIONAL GUIDELINES:
- BE EXTREMELY CONCISE: During voice calls, avoid lists and long paragraphs. Use short, punchy sentences.
- HUMAN-LIKE: Speak naturally. Use "I" when referring to yourself as Felix's AI and "Felix" when referring to him.
- EXPERTISE: Use context from the portfolio (Dubai Real Estate, AgriTech, FinTech, AI).
- INTERACTION: If a user interrupts, be graceful. Keep the flow moving.

Felix's Core Expertise: Solutions Architect, Frontend/Full Stack Dev (React, Next.js, Node.js, AWS, TS).
Sectors: Dubai Real Estate (Sobha, Damac, Emaar), AgriTech (Extension Africa), FinTech (Risevest), AI (SyncTeams).
`;

// --- Knowledge Base for Felix ---
const KNOWLEDGE_BASE: Record<string, string> = {
  "who are you":
    "I am Felix's Architect AI. I represent Felix, a senior Solutions Architect with expertise in building complex systems for Real Estate, AgriTech, FinTech, and AI industries globally.",
  "what do you do":
    "I assist users by providing deep insights into Felix's career, technical skills, and his portfolio of projects spaning 7+ countries and multiple high-growth sectors.",
  experience:
    "Felix has 4+ years of experience. He's held leadership roles at Webloom (India), Extension Africa (Nigeria), SyncTeams (USA), and Paperdaz (California), delivering projects for global giants like Emaar and Damac.",
  sectors:
    "Felix specializes in Real Estate (PropTech), AgriTech, FinTech, AI Agent Orchestration, and Logistics. He has significant experience in both the Dubai and African tech ecosystems.",
  projects:
    "Some highlight projects include DXB Finance (Dubai Real Estate), SyncTeams (AI No-Code), Extension Africa (AgriTech), and WhaleVault (Blockchain/Telegram).",
  skills:
    "Felix is a master of the MERN/Next.js stack, AWS architecture, React Native mobile dev, and SEO optimization. He's also a multi-instrumentalist!",
  services:
    "Felix offers Tier-1 services in Solution Architecture, Full-stack Web/Mobile Development, AI Integration, and Performance/SEO Optimization.",
  dubai:
    "Felix has worked extensively in the Dubai real estate sector with Webloom, building platforms for Emaar, Damac, Sobha, and Danube Properties.",
  nigeria:
    "In Nigeria, Felix has spearheaded AgriTech with Extension Africa and built e-learning/logistics systems with Starnet Tech and STL.",
  agritech:
    "Felix's AgriTech impact includes building the FarmEx suite (Agent & Vendor apps) for Extension Africa, utilizing offline-first mobile tech to reach rural areas.",
  "real estate":
    "Felix is a PropTech expert, having architected DXB Finance, New Offer Dubai, and several luxury property portals for global developers.",
  ai: "Felix is at the forefront of AI, having built SyncTeams (an AI orchestration platform) and Autozard (AI services suite).",
};

const findInKnowledgeBase = (query: string): string | null => {
  const lowerQuery = query.toLowerCase();
  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (lowerQuery.includes(key)) return value;
  }
  return null;
};

const formatMarkdown = (text: string) => {
  let formatted = text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-primary-400 font-bold">$1</strong>',
    )
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-lg font-bold text-white mt-4 mb-2">$1</h3>',
    )
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-xl font-bold text-white mt-5 mb-3">$1</h2>',
    )
    .replace(
      /^\s*[-*]\s+(.*$)/gim,
      '<li class="ml-4 mb-1 list-disc text-gray-300">$1</li>',
    )
    .replace(/\n\n/g, '<div class="h-3"></div>')
    .replace(/\n/g, "<br/>");

  if (formatted.includes("<li")) {
    formatted = `<ul class="space-y-1">${formatted}</ul>`;
  }

  return formatted;
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  // const [transcript, setTranscript] = useState("");

  const [messages, setMessages] = useState<
    { text: string; isBot: boolean; isStreaming?: boolean }[]
  >([
    {
      text: "Hi! I'm your professional assistant powered by Felix's expertise. Ask me anything!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const workerRef = useRef<Worker | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const silenceStartRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const speechBufferRef = useRef<string>("");
  const spokenSentencesRef = useRef<Set<string>>(new Set());
  const isStreamFinishedRef = useRef<boolean>(false);
  const lastInteractionTimeRef = useRef<number>(Date.now());
  const isWaitingForUserRef = useRef<boolean>(false);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current?.state !== "closed") {
        audioContextRef.current?.close();
      }
      silenceStartRef.current = null;
    }
  }, [isRecording]);

  const startRecording = useCallback(async () => {
    // Barge-in: Stop AI speaking if user starts talking
    if (window.speechSynthesis?.speaking) {
      window.speechSynthesis.cancel();
    }

    try {
      if (audioContextRef.current?.state !== "closed") {
        await audioContextRef.current?.close();
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      streamRef.current = stream;

      const audioCtx = new (
        window.AudioContext || (window as any).webkitAudioContext
      )({ sampleRate: 16000 });
      audioContextRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkAudio = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
        const average = sum / bufferLength;

        // Silence detection (auto-stop after 2s of silence)
        const SILENCE_THRESHOLD = 5; // Adjust as needed
        if (average < SILENCE_THRESHOLD) {
          if (silenceStartRef.current === null) {
            silenceStartRef.current = Date.now();
          } else if (Date.now() - silenceStartRef.current > 2000) {
            stopRecording();
            return;
          }
        } else {
          silenceStartRef.current = null;
        }

        animationFrameRef.current = requestAnimationFrame(checkAudio);
      };

      animationFrameRef.current = requestAnimationFrame(checkAudio);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const audioChunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

        // Convert Blob to Float32Array (16kHz mono)
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        const float32Data = audioBuffer.getChannelData(0);

        setIsTyping(true); // AI "thinking" while transcribing
        workerRef.current?.postMessage({
          type: "transcribe",
          audio: float32Data,
        });
      };

      mediaRecorder.start();
      setIsRecording(true);
      isWaitingForUserRef.current = false; // We are actively recording now
    } catch (e) {
      console.error("Mic error:", e);
      // console.error("Could not access microphone.");
    }
  }, [stopRecording]);

  // Initialize Whisper Worker

  const speakResponse = useCallback(
    (text: string, shouldCancel: boolean = true) => {
      if (!window.speechSynthesis) return;

      if (shouldCancel) {
        window.speechSynthesis.cancel();
      }

      const cleanText = text.replace(/[*#_`~]/g, "");

      const utterance = new SpeechSynthesisUtterance(cleanText);
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(
          (v) =>
            (v.name.includes("Google") ||
              v.name.includes("Premium") ||
              v.name.includes("Samantha")) &&
            v.lang.startsWith("en"),
        ) || voices.find((v) => v.lang.startsWith("en"));

      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Prevent Chrome garbage collection bug for long utterances
      (window as any).ttsUtterances = (window as any).ttsUtterances || [];
      (window as any).ttsUtterances.push(utterance);

      utterance.onend = () => {
        setTimeout(() => {
          if (
            !window.speechSynthesis.speaking &&
            !window.speechSynthesis.pending
          ) {
          }
        }, 100);
      };

      window.speechSynthesis.speak(utterance);
    },
    [],
  );

  // Initialize Gemini AI
  const client = useMemo(() => new GoogleGenAI({ apiKey: GEMINI_API_KEY }), []);

  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = {
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          {
            role: "model",
            parts: [
              {
                text: "Understood. I am now ready to assist as Felix's AI Assistant.",
              },
            ],
          },
        ],
      };
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const logInteraction = useCallback(
    async (userQuery: string, aiResponse: string, type: "chat" | "voice") => {
      try {
        await addDoc(collection(db, "interactions"), {
          query: userQuery,
          response: aiResponse,
          type: type,
          timestamp: serverTimestamp(),
        });
      } catch (e) {
        console.warn("Failed to log interaction (Check Firebase setup):", e);
      }
    },
    [],
  );

  const endCall = useCallback(() => {
    stopRecording();
    setIsVoiceMode(false);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }, [stopRecording]);

  const handleSend = useCallback(
    async (text: string = input) => {
      if (!text.trim()) return;

      // Voice-command Termination
      const lowerText = text.toLowerCase();
      const lastBotMsg = messages[messages.length - 1];
      if (
        isVoiceMode &&
        lastBotMsg?.isBot &&
        lastBotMsg.text.includes("end the call") &&
        (lowerText.includes("yes") || lowerText.includes("sure"))
      ) {
        speakResponse("Alright, talk to you later! Bye.");
        setTimeout(() => endCall(), 2000);
        return;
      }

      lastInteractionTimeRef.current = Date.now();
      isWaitingForUserRef.current = false;
      const userMsg = text;
      setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
      setInput("");
      setIsTyping(true);

      const kbAnswer = findInKnowledgeBase(userMsg);
      if (kbAnswer) {
        setIsTyping(true);
        setTimeout(async () => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            { text: "", isBot: true, isStreaming: true },
          ]);

          const words = kbAnswer.split(" ");
          let currentText = "";
          for (let i = 0; i < words.length; i++) {
            currentText += (i === 0 ? "" : " ") + words[i];
            const textToSet = currentText;
            setMessages((prev) => {
              const next = [...prev];
              if (next.length > 0) {
                next[next.length - 1] = {
                  ...next[next.length - 1],
                  text: textToSet,
                };
              }
              return next;
            });
            await new Promise((resolve) => setTimeout(resolve, 30));
          }

          setMessages((prev) => {
            const next = [...prev];
            if (next.length > 0) {
              next[next.length - 1] = {
                ...next[next.length - 1],
                isStreaming: false,
              };
            }
            return next;
          });

          logInteraction(userMsg, kbAnswer, isVoiceMode ? "voice" : "chat");
          if (isVoiceMode) {
            isStreamFinishedRef.current = true;
            speakResponse(kbAnswer);
          }
        }, 600);
        return;
      }

      try {
        chatSessionRef.current.history.push({
          role: "user",
          parts: [{ text: userMsg }],
        });

        const responseStream = await client.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents: chatSessionRef.current.history,
          config: {
            safetySettings: [
              {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
              },
            ],
          },
        });

        setMessages((prev) => [
          ...prev,
          { text: "", isBot: true, isStreaming: true },
        ]);

        let fullResponse = "";
        speechBufferRef.current = "";
        spokenSentencesRef.current.clear();
        isStreamFinishedRef.current = false;

        for await (const chunk of responseStream) {
          let chunkText = "";
          try {
            chunkText = chunk.text || "";
          } catch (e) {
            console.warn("Chunk blocked or empty:", e);
          }

          if (chunkText) {
            fullResponse += chunkText;
            speechBufferRef.current += chunkText;

            // Incremental TTS: Speak when a sentence is complete
            if (isVoiceMode) {
              let sentences = speechBufferRef.current.split(/(?<=[.!?])\s+/);
              while (sentences.length > 1) {
                const completeSentence = sentences[0].trim();
                // Avoid speaking partial/empty or duplicates
                if (
                  completeSentence &&
                  !spokenSentencesRef.current.has(completeSentence)
                ) {
                  speakResponse(completeSentence, false);
                  spokenSentencesRef.current.add(completeSentence);
                }
                speechBufferRef.current = sentences.slice(1).join(" ");
                sentences = speechBufferRef.current.split(/(?<=[.!?])\s+/);
              }
            }

            const updatedText = fullResponse;
            setMessages((prev) => {
              const newMessages = [...prev];
              if (newMessages.length > 0) {
                newMessages[newMessages.length - 1] = {
                  ...newMessages[newMessages.length - 1],
                  text: updatedText,
                };
              }
              return newMessages;
            });

            if (isTyping) setIsTyping(false);
          }
        }

        // Speak remaining buffer
        isStreamFinishedRef.current = true;
        if (isVoiceMode && speechBufferRef.current.trim()) {
          const finalSentence = speechBufferRef.current.trim();
          if (!spokenSentencesRef.current.has(finalSentence)) {
            speakResponse(finalSentence, false);
            spokenSentencesRef.current.add(finalSentence);
          }
        }

        setMessages((prev) => {
          const newMessages = [...prev];
          if (newMessages.length > 0) {
            newMessages[newMessages.length - 1] = {
              ...newMessages[newMessages.length - 1],
              isStreaming: false,
            };
          }
          return newMessages;
        });

        chatSessionRef.current.history.push({
          role: "model",
          parts: [{ text: fullResponse }],
        });

        setIsTyping(false);
        logInteraction(userMsg, fullResponse, isVoiceMode ? "voice" : "chat");
      } catch (error: any) {
        console.error("Gemini Error:", error);
        // console.error(error.message || "Unknown Connection Error");
        setIsTyping(false);
        const fallback =
          "I apologize, but I'm having trouble connecting to my brain right now.";
        setMessages((prev) => [...prev, { text: fallback, isBot: true }]);
      }
    },
    [
      input,
      isVoiceMode,
      isTyping,
      logInteraction,
      client,
      speakResponse,
      messages,
      endCall,
    ],
  );

  // Handle voice call interaction (Tap/Hold to speak)
  // const toggleRecording = useCallback(() => {
  //   if (isRecording) {
  //     stopRecording();
  //   } else {
  //     setIsVoiceMode(true);
  //     workerRef.current?.postMessage({ type: "load" });
  //     startRecording();
  //   }
  // }, [isRecording, startRecording, stopRecording]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker("/whisper.worker.js", { type: "module" });

      workerRef.current.onmessage = (event) => {
        const { type, message, text } = event.data;
        if (type === "ready") {
          console.log("Whisper Worker Ready");

          // Proactive Greeting for Voice Record Mode
          const greeting =
            "Hi! I'm Felix's AI assistant. Tap the microphone and say something!";
          setMessages((prev) => [...prev, { text: greeting, isBot: true }]);
          isStreamFinishedRef.current = true;
          speakResponse(greeting);
        } else if (type === "result") {
          console.log("Whisper Result:", text);
          if (text.trim()) {
            handleSend(text.trim());
          }
          setIsTyping(false);
        } else if (type === "error") {
          console.error("Whisper Error:", message);
          alert("Voice Error: " + message);
          setIsTyping(false);
        }
      };
    }

    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, [handleSend, isVoiceMode, speakResponse, startRecording]);

  // Proactive Silence Handling removed for voice record mode

  return (
    <div className="fixed bottom-24 right-6 z-[2000] flex flex-col items-end font-sans">
      {isOpen && !isMinimized && (
        <div className="w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-h-[calc(100dvh-140px)] h-[480px] bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-6 duration-500">
          <div className="p-5 bg-gradient-to-r from-primary-900/40 to-slate-900/10 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center relative">
                <FaRobot className="text-primary-400 text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
              </div>
              <div>
                <span className="font-bold text-white text-sm block">
                  Felix's Architect AI
                </span>
                <span className="text-[9px] text-primary-400 font-black uppercase tracking-[0.2em]">
                  Top Tier Mode
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() =>
                  setMessages([{ text: "History cleared.", isBot: true }])
                }
                className="text-gray-400 hover:text-red-400 transition-all p-2 rounded-lg hover:bg-white/5"
                title="Clear Chat"
              >
                <FaTrash size={14} />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-all p-2 rounded-lg hover:bg-white/5"
              >
                <FaMinus size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-all p-2 rounded-lg hover:bg-white/5"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide bg-gradient-to-b from-slate-900/50 to-transparent">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                    msg.isBot
                      ? "bg-white/5 text-gray-200 self-start rounded-tl-none border border-white/5"
                      : "bg-primary-600 text-white self-end ml-auto rounded-tr-none shadow-lg shadow-primary-900/20"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.isBot ? formatMarkdown(msg.text) : msg.text,
                  }}
                />
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center p-4 bg-white/5 rounded-2xl">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"></span>
                  <span className="text-[10px] text-gray-500 ml-2">
                    Assistant is thinking...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-900/50 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setIsVoiceMode(false);
                    handleSend();
                  }
                }}
                placeholder="Ask any question or about Felix..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-[13px] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all"
              />
              {/* <button
                  onClick={toggleRecording}
                  disabled={isWhisperLoading || isAISpeaking}
                  className={`px-4 rounded-2xl transition-all shadow-lg flex items-center justify-center ${
                    isRecording
                      ? "bg-red-500 text-white animate-pulse shadow-red-500/40"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                  title={isRecording ? "Stop Recording" : "Voice Input"}
                >
                  <FaMicrophone size={14} />
                </button> */}
              <button
                onClick={() => {
                  setIsVoiceMode(false);
                  handleSend();
                }}
                className="bg-primary-600 text-white px-4 rounded-2xl transition-all shadow-lg shadow-primary-900/40 flex items-center justify-center"
                title="Send Message"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </>
        </div>
      )}

      {isMinimized && isOpen && (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-primary-600 text-white px-8 py-4 rounded-full shadow-2xl mb-4 flex items-center gap-4"
        >
          <FaRobot size={14} />
          <span className="text-xs font-black uppercase tracking-[0.2em]">
            {isVoiceMode ? "VOICE ACTIVE" : "OPEN AI"}
          </span>
        </button>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
          if (isOpen && isVoiceMode) endCall();
        }}
        className={`w-16 h-16 bg-primary-600 text-white rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all duration-500 flex items-center justify-center relative ${isOpen ? "rotate-90" : ""}`}
      >
        {isOpen ? <FaTimes size={28} /> : <FaRobot size={32} />}
      </button>
    </div>
  );
};

export default AIAssistant;
