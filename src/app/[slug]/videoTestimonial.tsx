"use client"
import { useRef, useState } from "react"

export const VideoTestimonial =() => {

  const [recording, setRecording] = useState(false);
  const [blob, setBlob] = useState<Blob | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  
  const startRecording = async() =>{
    const stream = await navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true,
    })
     
    const recorder = new MediaRecorder(stream);
    recorderRef.current = recorder;

    const chunks:BlobPart[] = [];

    recorder.ondataavailable = (event: BlobEvent) =>{
      chunks.push(event.data)
    }

    recorder.onstop = () => {
      const videoBlob = new Blob(chunks,{type:"video/webm"})

      setBlob(videoBlob)
    }

    recorder.start();
    setRecording(true)
  }



  const stopRecording = async() =>{
    recorderRef.current?.stop();

    setRecording(false);
  }



  return (
    <div className="flex flex-col items-center gap-4 p-4">
      
      {/* Live camera stream preview */}
      <video
        ref={(video) => {
          // attach stream to video element when recording starts
          if (video && recorderRef.current && recorderRef.current.stream) {
            video.srcObject = recorderRef.current.stream;
          }
        }}
        autoPlay
        muted
        className="w-64 h-48 bg-black"
      ></video>
  
      {/* Start / Stop recording buttons */}
      {!recording ? (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Stop Recording
        </button>
      )}
  
      {/* Show preview after recording stops */}
      {blob && (
        <div className="mt-4">
          <p className="text-lg font-semibold mb-2">Preview:</p>
          <video
            src={URL.createObjectURL(blob)}
            controls
            className="w-64 h-48 bg-gray-200"
          />
        </div>
      )}
    </div>
  );
  
}