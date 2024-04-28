import "./App.css";
import { DrumPad } from "./components/DrumPad";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { VolumeX, Volume } from "lucide-react";
import {
  addDescription,
  addIcon,
  onClickMute,
  onClickUnmute,
} from "./redux/slice/displaySlice";
import { Button } from "./components/ui/button";

function App() {
  const audioFiles = [
    { name: "Dsc_Oh", location: "Dsc_Oh.mp3", icon: "🎺", key: "Q" },
    { name: "Cev_H2", location: "Cev_H2.mp3", icon: "🎵", key: "W" },
    { name: "Heater-1", location: "Heater-1.mp3", icon: "🔊", key: "E" },
    { name: "Heater-2", location: "Heater-2.mp3", icon: "🎤", key: "A" },
    { name: "Heater-3", location: "Heater-3.mp3", icon: "🎸", key: "S" },
    { name: "Heater-4_1", location: "Heater-4_1.mp3", icon: "🥁", key: "D" },
    { name: "Heater-6", location: "Heater-6.mp3", icon: "🎹", key: "Z" },
    { name: "Kick_n_Hat", location: "Kick_n_Hat.mp3", icon: "🎧", key: "X" },
    { name: "RP4_KICK_1", location: "RP4_KICK_1.mp3", icon: "🪇", key: "C" },
  ];
  const description = useAppSelector((state) => state.display.description);
  const icon = useAppSelector((state) => state.display.icon);
  const mute = useAppSelector((state) => state.display.mute);
  const dispatch = useAppDispatch();

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioFiles.find((audio) => audio.key === e.key.toUpperCase());

    if (!clip) return;
    dispatch(addDescription(clip.name));
    dispatch(addIcon(clip.icon));
    (document.getElementById(clip.key) as HTMLAudioElement)
      .play()
      .catch(console.error);
  };
  return (
    <div
      className="flex flex-col gap-1 items-center"
      onKeyDown={onKeyDownHandler}
    >
      <h1 className="text-4xl font-bold  m-5 text-center">
        Music Instrumental App
      </h1>
      <div
        id="drum-machine"
        className="w-full lg:w-[70%] h-[100vh]  flex flex-col  md:flex-row justify-center items-center p-2 "
      >
        <div className=" w-full lg:w-1/2 flex justify-center items-center h-1/2 ">
          <div className="grid grid-cols-3 gap-2 w-fit">
            {audioFiles.map((data) => (
              <DrumPad
                key={`drum-pad-${data.key}`}
                src={"/" + data.location}
                keyValue={data.key}
                name={data.name}
                icon={data.icon}
              />
            ))}
          </div>
        </div>

        <div
          id="display"
          className="flex flex-col justify-between items-center w-full lg:w-1/2 h-1/2 border-2 border-black p-2 rounded-lg"
        >
          <h1 className="text-2xl font-bold font-mono w-full text-center">
            Let's Play Instruments
          </h1>
          <div className="flex gap-1  bg-black text-white  p-5 rounded-md">
            <h1 className="text-xl">{description}</h1>
            <p className="text-xl" key={"icon"}>
              {icon}
            </p>
          </div>
          <div>
            <Button asChild>
              {mute ? (
                <Volume
                  className="h-full w-full"
                  onClick={() => dispatch(onClickUnmute())}
                />
              ) : (
                <VolumeX
                  className="h-full w-full"
                  onClick={() => dispatch(onClickMute())}
                />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
