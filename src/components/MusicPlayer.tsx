"use client";

import { useState, useRef, useEffect } from "react";

// Background music tracks
const TRACKS = [
  { name: "Gentle Piano", src: "/audio/bgm.mp3" },
];

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(TRACKS[0].src);
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Volume slider */}
      {showVolume && (
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-xl border border-pink-100 flex items-center gap-2">
          <span className="text-xs">🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-1 accent-pink-400"
          />
          <span className="text-xs">🔊</span>
        </div>
      )}

      {/* Music button */}
      <div className="relative group">
        {/* Pulse rings when playing */}
        {playing && (
          <>
            <div className="absolute inset-0 rounded-full bg-pink-300/30 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute -inset-1 rounded-full bg-pink-200/20 animate-pulse" />
          </>
        )}

        <button
          onClick={toggle}
          onContextMenu={(e) => { e.preventDefault(); setShowVolume(!showVolume); }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: playing
              ? "linear-gradient(135deg, #e879a0, #c084fc)"
              : "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(192,132,252,0.25))",
            backdropFilter: "blur(12px)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
          title={playing ? "🎵 暂停 Pause — 右键调节音量" : "🎶 播放 Play — 右键调节音量"}
        >
          <span className={`text-xl transition-transform duration-300 ${playing ? "animate-spin-slow" : ""}`}>
            {playing ? "🎵" : "🎶"}
          </span>
        </button>

        {/* Subtle label */}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 whitespace-nowrap opacity-50">
          {playing ? "playing..." : "music"}
        </span>
      </div>
    </div>
  );
}
