import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface PianoKeyProps {
  note: string;
  type: "white" | "black";
  isPressed?: boolean;
  onPress: (note: string) => void;
  onRelease: (note: string) => void;
  className?: string;
}

const PianoKey = ({
  note,
  type,
  isPressed,
  onPress,
  onRelease,
  className,
}: PianoKeyProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isPressed || false);
  }, [isPressed]);

  const handleMouseDown = () => {
    setIsActive(true);
    onPress(note);
  };

  const handleMouseUp = () => {
    setIsActive(false);
    onRelease(note);
  };

  const handleMouseLeave = () => {
    if (isActive) {
      setIsActive(false);
      onRelease(note);
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative select-none transition-all duration-75 font-medium text-sm",
        type === "white"
          ? cn(
              "bg-white border border-gray-300 text-gray-600 h-32 w-12",
              "hover:bg-gray-50 active:bg-gray-100",
              isActive && "bg-gray-100 shadow-inner",
            )
          : cn(
              "bg-gray-900 text-white h-20 w-8 -mx-4 z-10",
              "hover:bg-gray-800 active:bg-gray-700",
              isActive && "bg-gray-700 shadow-inner",
            ),
        "flex items-end justify-center pb-3",
        className,
      )}
    >
      <span
        className={cn(
          "text-xs font-mono",
          type === "black" ? "text-gray-300" : "text-gray-500",
        )}
      >
        {note}
      </span>
    </button>
  );
};

export default PianoKey;
