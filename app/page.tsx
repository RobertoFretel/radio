"use client"
import { Radio } from "@/utils/radio"
import { ResponseInfo } from "@/utils/type"
import { useEffect, useState } from "react"

const Player = Radio.runPlaylist()
const thumbnail = "https://platform-static.cdn.mdstrm.com/player/thumbnail/65b2c7a48ef3403a8737a39c.png"

export default function () {
  const [info, setInfo] = useState<ResponseInfo>()

  useEffect(() => {
    console.log(info)
  }, [info])

  return (
    <main className="fixed inset-0 flex flex-col bg-white">
      <section className="w-full flex-1 flex items-center p-4">
        <img
          src={info?.iImg ? info.iImg : thumbnail}
          className="w-full aspect-square object-cover shadow-lg rounded-3xl"
        />
      </section>
      <section className="w-full h-20 bg-gray-100 inset-shadow-xl rounded-t-lg px-4 flex">
        <div className="h-full aspect-square flex justify-center items-center">
          <Player setInfo={setInfo}></Player>
        </div>
        <div className="h-full flex-1 flex items-center px-2">
          <p className="w-full font-bold text-xl text-black text-ellipsis">{info && info.title}</p>
        </div>
      </section>
    </main>
  )
}