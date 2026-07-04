"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3"
    );
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        background: playing
          ? "linear-gradient(135deg, #e879a0, #7ec8e3)"
          : "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(126,200,227,0.3))",
        backdropFilter: "blur(8px)",
        border: "2px solid rgba(255,255,255,0.3)",
      }}
      title={playing ? "暂停音乐 Pause" : "播放音乐 Play"}
    >
      <span className="text-xl">{playing ? "🎵" : "🎶"}</span>
      {playing && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
      )}
    </button>
  );
}
