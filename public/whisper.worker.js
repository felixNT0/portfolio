import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js";

env.allowLocalModels = false;
env.backends.onnx.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/';

let instancePromise = null;

async function getInstance(progress_callback) {
  if (instancePromise === null) {
    instancePromise = pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-tiny.en",
      { progress_callback }
    );
  }
  return instancePromise;
}

self.onmessage = async (event) => {
  const { type, audio } = event.data;

  if (type === "load") {
    try {
      await getInstance((data) => {
        self.postMessage({ type: "progress", data });
      });
      self.postMessage({ type: "ready" });
    } catch (error) {
      self.postMessage({ type: "error", message: error.message + " (Load)" });
    }
  } else if (type === "transcribe") {
    try {
      const transcriber = await getInstance();
      const output = await transcriber(audio, {
        chunk_length_s: 30,
        stride_length_s: 5,
      });

      self.postMessage({ type: "result", text: output.text });
    } catch (error) {
      self.postMessage({ type: "error", message: error.message + " (Transcribe)" });
    }
  }
};
