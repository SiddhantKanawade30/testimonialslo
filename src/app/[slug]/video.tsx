import { useState, useRef, useEffect } from "react";

export const VideoLogic = () =>{

    const [recording, setRecording] = useState(false);
    const [blob, setBlob] = useState<Blob | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const recorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);
    
    // Initialize camera on component mount
    useEffect(() => {
      initializeCamera();
      
      // Cleanup on unmount
      return () => {
        stopCamera();
      };
    }, []);
    
    const initializeCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        
        streamRef.current = stream;
        
        // Attach stream to video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.style.transform = "scaleX(-1)"; // Flip preview
          }
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };
    
    const stopCamera = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
    
    const startRecording = () => {
      if (!streamRef.current) return;
      
      chunksRef.current = [];
      const recorder = new MediaRecorder(streamRef.current);
      recorderRef.current = recorder;
  
      recorder.ondataavailable = (event: BlobEvent) => {
        chunksRef.current.push(event.data);
      };
  
      recorder.onstop = () => {
        const videoBlob = new Blob(chunksRef.current, { type: "video/webm" });
        setBlob(videoBlob);
        
        // Stop camera and display recorded video
        stopCamera();
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = URL.createObjectURL(videoBlob);
          videoRef.current.style.transform = "scaleX(1)";
        }
      };
  
      recorder.start();
      setRecording(true);
    };
  
    const stopRecording = () => {
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        recorderRef.current.stop();
        setRecording(false);
      }
    };
    
    const recordAgain = () => {
      setBlob(null);
      setRecording(false);
      initializeCamera();
    };
  
  
    return (
        <div className="flex flex-col items-center gap-4 p-8">
          
          {/* Video container with controls overlay */}
          <div className="relative w-full max-w-2xl">
            {/* Video element for both live stream and playback */}
            <video
              ref={videoRef}
              autoPlay
              muted={!blob}
              controls={!!blob}
              playsInline
              className="w-full aspect-video bg-black rounded-lg shadow-xl"
            />
            
            {/* Control button overlay - only show when not playing recorded video */}
            {!blob && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {!recording ? (
                  <button
                    onClick={startRecording}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all flex items-center gap-2 font-medium"
                  >
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    Start Recording
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full shadow-lg transition-all flex items-center gap-2 font-medium"
                  >
                    <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                    Stop Recording
                  </button>
                )}
              </div>
            )}
            
            {/* Recording indicator */}
            {recording && (
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Recording</span>
              </div>
            )}
          </div>
          
          {/* Re-record button after recording */}
          {blob && (
            <button
              onClick={recordAgain}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-all font-medium"
            >
              Record Again
            </button>
          )}
        </div>
      );
}