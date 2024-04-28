import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addDescription, addIcon } from "@/redux/slice/displaySlice";

type DrumPadProps = {
  src: string;
  keyValue: string;
  name: string;
  icon: string;
};
export const DrumPad = ({ src, keyValue, name, icon }: DrumPadProps) => {
  const handleClick = (keyValue: string) => {
    if (mute) return;
    dispatch(addDescription(name));
    dispatch(addIcon(icon));
    (document.getElementById(keyValue) as HTMLAudioElement)
      .play()
      .catch(console.error);
  };

  const dispatch = useAppDispatch();
  const mute = useAppSelector((state) => state.display.mute);
  return (
    <>
      <Button
        className="drum-pad w-20 h-20 rounded-md"
        id={`drum-${keyValue}`}
        onClick={() => handleClick(keyValue)}
      >
        <audio className="clip" id={keyValue} src={src} muted={mute} />
        {keyValue}
      </Button>
    </>
  );
};
