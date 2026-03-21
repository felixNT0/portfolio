import { env, pipeline } from "@huggingface/transformers";

// Skip local check to download models from hub
env.allowLocalModels = false;

// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

class WhisperWorker {
  static instance: any = null;

  static async getInstance(progress_callback?: any) {
    if (this.instance === null) {
      this.instance = await pipeline(
        "automatic-speech-recognition",
        "Xenova/whisper-tiny.en",
        {
          progress_callback,
        },
      );
    }
    return this.instance;
  }
}

// Listen for messages from the main thread
ctx.onmessage = async (event) => {
  const { type, audio } = event.data;

  if (type === "load") {
    try {
      await WhisperWorker.getInstance((data: any) => {
        ctx.postMessage({ type: "progress", data });
      });
      ctx.postMessage({ type: "ready" });
    } catch (error: any) {
      ctx.postMessage({ type: "error", message: error.message });
    }
  } else if (type === "transcribe") {
    try {
      const transcriber = await WhisperWorker.getInstance();
      const output = await transcriber(audio, {
        chunk_length_s: 30,
        stride_length_s: 5,
      });

      ctx.postMessage({ type: "result", text: output.text });
    } catch (error: any) {
      ctx.postMessage({ type: "error", message: error.message });
    }
  }
};
