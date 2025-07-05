import { useState, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import PianoKey from "@/components/ui/piano-key";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [playedNotes, setPlayedNotes] = useState<string[]>([]);

  // Piano notes configuration
  const notes = [
    { note: "C4", type: "white", key: "a" },
    { note: "C#4", type: "black", key: "w" },
    { note: "D4", type: "white", key: "s" },
    { note: "D#4", type: "black", key: "e" },
    { note: "E4", type: "white", key: "d" },
    { note: "F4", type: "white", key: "f" },
    { note: "F#4", type: "black", key: "t" },
    { note: "G4", type: "white", key: "g" },
    { note: "G#4", type: "black", key: "y" },
    { note: "A4", type: "white", key: "h" },
    { note: "A#4", type: "black", key: "u" },
    { note: "B4", type: "white", key: "j" },
    { note: "C5", type: "white", key: "k" },
    { note: "C#5", type: "black", key: "o" },
    { note: "D5", type: "white", key: "l" },
  ] as const;

  // Simple audio synthesis using Web Audio API
  const playNote = useCallback(
    (note: string) => {
      if (isMuted) return;

      try {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        // Convert note to frequency
        const noteFrequencies: { [key: string]: number } = {
          C4: 261.63,
          "C#4": 277.18,
          D4: 293.66,
          "D#4": 311.13,
          E4: 329.63,
          F4: 349.23,
          "F#4": 369.99,
          G4: 392.0,
          "G#4": 415.3,
          A4: 440.0,
          "A#4": 466.16,
          B4: 493.88,
          C5: 523.25,
          "C#5": 554.37,
          D5: 587.33,
        };

        oscillator.frequency.setValueAtTime(
          noteFrequencies[note] || 440,
          audioContext.currentTime,
        );
        oscillator.type = "triangle";

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          volume * 0.3,
          audioContext.currentTime + 0.01,
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContext.currentTime + 1,
        );

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
      } catch (error) {
        console.warn("Audio playback not supported:", error);
      }
    },
    [volume, isMuted],
  );

  const handleKeyPress = useCallback(
    (note: string) => {
      setPressedKeys((prev) => new Set(prev).add(note));
      setPlayedNotes((prev) => [...prev.slice(-19), note]);
      playNote(note);
    },
    [playNote],
  );

  const handleKeyRelease = useCallback((note: string) => {
    setPressedKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(note);
      return newSet;
    });
  }, []);

  // Setup keyboard hotkeys
  notes.forEach(({ note, key }) => {
    useHotkeys(
      key,
      () => handleKeyPress(note),
      { keydown: true, keyup: false },
      [handleKeyPress],
    );
    useHotkeys(
      key,
      () => handleKeyRelease(note),
      { keydown: false, keyup: true },
      [handleKeyRelease],
    );
  });

  const clearPlayedNotes = () => {
    setPlayedNotes([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Interactive Piano
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Use your keyboard or click the keys below to play music
          </p>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-2"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
              {isMuted ? "Unmute" : "Mute"}
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Volume:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20"
                disabled={isMuted}
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={clearPlayedNotes}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>

        {/* Piano Interface */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">Virtual Piano</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Piano Keys */}
              <div className="relative flex justify-center">
                <div className="flex">
                  {notes.map(({ note, type, key }) => (
                    <PianoKey
                      key={note}
                      note={note}
                      type={type as "white" | "black"}
                      isPressed={pressedKeys.has(note)}
                      onPress={handleKeyPress}
                      onRelease={handleKeyRelease}
                    />
                  ))}
                </div>
              </div>

              {/* Keyboard Mapping */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold mb-4">Keyboard Mapping</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {notes.map(({ note, key, type }) => (
                    <Badge
                      key={note}
                      variant={type === "black" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {key.toUpperCase()} → {note}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recently Played Notes */}
          {playedNotes.length > 0 && (
            <Card className="mt-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Recently Played Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {playedNotes.map((note, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {note}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Piano;
