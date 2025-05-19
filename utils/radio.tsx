"use client"
import type { PlayerProps, ResponseInfo } from "./type"
import React, { useEffect, useRef, useState } from "react"
import Player from "react-hls-player"
import { PlayIcon, PauseIcon } from "lucide-react"

const playlist = "https://mdstrm.com/audio/6598b751261d9e088a6deadd/live.m3u8"
export default function ({ setInfo }: PlayerProps) {    
  const playerRef = useRef<HTMLVideoElement>(null!)
  const [isPlaying, setPlaying] = useState(false)
  
  const toggleVideo = async () => {
    if (isPlaying == false) {
      playerRef.current.play()
      setPlaying(true)
      return
    }
    
    playerRef.current.pause()
    setPlaying(false)
    return
  }
  const handleInfo = async () => {
    const time = playerRef.current.currentTime
    if (Math.round(time) % 15 == 0) {
      const json = await info()
      setInfo(json)
    }
  }
  useEffect(() => {
    if (playerRef.current == null) return
    playerRef.current.addEventListener("timeupdate", handleInfo)
    return () => {
      playerRef.current.removeEventListener("timeupdate", handleInfo)
    }
  }, [])
  
  return (
    <button className="p-4 rounded-full justify-center items-center" onClick={toggleVideo}>
      {isPlaying == false ? (
        <PlayIcon size={32} color="black" fill="black" />
      ) : (
        <PauseIcon size={32} color="black" fill="black" />
      )}
      <Player
        className="hidden"
        playerRef={playerRef}
        src={playlist}
      />
    </button>
  )
}

async function info () {
  const res = await fetch("https://scraper2.onlineradiobox.com/pe.panamericanasalsa")
  const json = await res.json() as ResponseInfo
  return json
}