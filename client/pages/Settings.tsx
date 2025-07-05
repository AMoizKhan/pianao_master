import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Settings as SettingsIcon,
  Volume2,
  Keyboard,
  Palette,
  Save,
} from "lucide-react";

const Settings = () => {
  const [audioSettings, setAudioSettings] = useState({
    masterVolume: [70],
    audioLatency: "low",
    sustainPedal: false,
    audioQuality: "high",
  });

  const [keyboardSettings, setKeyboardSettings] = useState({
    keyMapping: "qwerty",
    velocitySensitive: true,
    showKeyLabels: true,
    octaveShift: 0,
  });

  const [displaySettings, setDisplaySettings] = useState({
    theme: "light",
    showNoteNames: true,
    animateKeys: true,
    keyboardShortcuts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Save settings to localStorage or send to server
    localStorage.setItem(
      "pianoSettings",
      JSON.stringify({
        audio: audioSettings,
        keyboard: keyboardSettings,
        display: displaySettings,
      }),
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const resetToDefaults = () => {
    setAudioSettings({
      masterVolume: [70],
      audioLatency: "low",
      sustainPedal: false,
      audioQuality: "high",
    });
    setKeyboardSettings({
      keyMapping: "qwerty",
      velocitySensitive: true,
      showKeyLabels: true,
      octaveShift: 0,
    });
    setDisplaySettings({
      theme: "light",
      showNoteNames: true,
      animateKeys: true,
      keyboardShortcuts: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Settings</h1>
          <p className="text-lg text-muted-foreground">
            Customize your piano experience to your preferences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Audio Settings */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Audio Settings
              </CardTitle>
              <CardDescription>
                Configure audio quality, volume, and sound preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Master Volume</Label>
                  <div className="px-2">
                    <Slider
                      value={audioSettings.masterVolume}
                      onValueChange={(value) =>
                        setAudioSettings((prev) => ({
                          ...prev,
                          masterVolume: value,
                        }))
                      }
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0%</span>
                      <span>{audioSettings.masterVolume[0]}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Audio Quality</Label>
                  <Select
                    value={audioSettings.audioQuality}
                    onValueChange={(value) =>
                      setAudioSettings((prev) => ({
                        ...prev,
                        audioQuality: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Fast)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High (Recommended)</SelectItem>
                      <SelectItem value="ultra">Ultra (Slow)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Audio Latency</Label>
                  <Select
                    value={audioSettings.audioLatency}
                    onValueChange={(value) =>
                      setAudioSettings((prev) => ({
                        ...prev,
                        audioLatency: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Recommended)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Sustain Pedal</Label>
                    <p className="text-xs text-muted-foreground">
                      Enable sustain effect
                    </p>
                  </div>
                  <Switch
                    checked={audioSettings.sustainPedal}
                    onCheckedChange={(checked) =>
                      setAudioSettings((prev) => ({
                        ...prev,
                        sustainPedal: checked,
                      }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Keyboard Settings */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-primary" />
                Keyboard Settings
              </CardTitle>
              <CardDescription>
                Configure keyboard mapping and input preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Key Mapping Layout</Label>
                  <Select
                    value={keyboardSettings.keyMapping}
                    onValueChange={(value) =>
                      setKeyboardSettings((prev) => ({
                        ...prev,
                        keyMapping: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="qwerty">QWERTY (Default)</SelectItem>
                      <SelectItem value="dvorak">Dvorak</SelectItem>
                      <SelectItem value="colemak">Colemak</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Octave Shift</Label>
                  <Select
                    value={keyboardSettings.octaveShift.toString()}
                    onValueChange={(value) =>
                      setKeyboardSettings((prev) => ({
                        ...prev,
                        octaveShift: parseInt(value),
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-2">-2 Octaves</SelectItem>
                      <SelectItem value="-1">-1 Octave</SelectItem>
                      <SelectItem value="0">Default</SelectItem>
                      <SelectItem value="1">+1 Octave</SelectItem>
                      <SelectItem value="2">+2 Octaves</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Velocity Sensitive</Label>
                    <p className="text-xs text-muted-foreground">
                      Respond to key press speed
                    </p>
                  </div>
                  <Switch
                    checked={keyboardSettings.velocitySensitive}
                    onCheckedChange={(checked) =>
                      setKeyboardSettings((prev) => ({
                        ...prev,
                        velocitySensitive: checked,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show Key Labels</Label>
                    <p className="text-xs text-muted-foreground">
                      Display keyboard shortcuts on keys
                    </p>
                  </div>
                  <Switch
                    checked={keyboardSettings.showKeyLabels}
                    onCheckedChange={(checked) =>
                      setKeyboardSettings((prev) => ({
                        ...prev,
                        showKeyLabels: checked,
                      }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Display Settings */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Display Settings
              </CardTitle>
              <CardDescription>
                Customize the visual appearance and interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select
                    value={displaySettings.theme}
                    onValueChange={(value) =>
                      setDisplaySettings((prev) => ({ ...prev, theme: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show Note Names</Label>
                    <p className="text-xs text-muted-foreground">
                      Display note names on piano keys
                    </p>
                  </div>
                  <Switch
                    checked={displaySettings.showNoteNames}
                    onCheckedChange={(checked) =>
                      setDisplaySettings((prev) => ({
                        ...prev,
                        showNoteNames: checked,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Animate Keys</Label>
                    <p className="text-xs text-muted-foreground">
                      Show key press animations
                    </p>
                  </div>
                  <Switch
                    checked={displaySettings.animateKeys}
                    onCheckedChange={(checked) =>
                      setDisplaySettings((prev) => ({
                        ...prev,
                        animateKeys: checked,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Keyboard Shortcuts</Label>
                    <p className="text-xs text-muted-foreground">
                      Enable global keyboard shortcuts
                    </p>
                  </div>
                  <Switch
                    checked={displaySettings.keyboardShortcuts}
                    onCheckedChange={(checked) =>
                      setDisplaySettings((prev) => ({
                        ...prev,
                        keyboardShortcuts: checked,
                      }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleSave}
              size="lg"
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {saved ? "Settings Saved!" : "Save Settings"}
            </Button>
            <Button onClick={resetToDefaults} variant="outline" size="lg">
              Reset to Defaults
            </Button>
          </div>

          {saved && (
            <div className="text-center">
              <Badge variant="default" className="bg-green-100 text-green-800">
                Settings have been saved successfully!
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
