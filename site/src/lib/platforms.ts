import { Laptop, Monitor, Smartphone, Terminal } from "lucide-static";
import type { PlatformId } from "./release";

export interface PlatformInfo {
  id: PlatformId;
  name: string;
  icon: string;
  requirements: string;
}

export const platforms: PlatformInfo[] = [
  { id: "windows", name: "Windows", icon: Monitor, requirements: "Windows 10 or 11, 64-bit" },
  { id: "macos", name: "macOS", icon: Laptop, requirements: "Apple Silicon and Intel Macs, one download" },
  { id: "linux", name: "Linux", icon: Terminal, requirements: "x86-64: AppImage, .deb or .rpm" },
  { id: "android", name: "Android", icon: Smartphone, requirements: "Android 7.0 or later, installed from the APK" },
];
