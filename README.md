# Simple Desk releases

**[Website](https://jboullion.github.io/simple-desk-releases/)** ·
**[Download](https://jboullion.github.io/simple-desk-releases/download/)** ·
**[Docs](https://jboullion.github.io/simple-desk-releases/docs/)** ·
[Privacy](https://jboullion.github.io/simple-desk-releases/privacy/) ·
[Terms](https://jboullion.github.io/simple-desk-releases/terms/)

Downloads for **Simple Desk**, a personal desktop suite: Markdown, CSV, PDF, Paint, Board, Calculator and more, in one window.

Get the latest version from [Releases](https://github.com/jboullion/simple-desk-releases/releases/latest):

- **Windows:** `Simple.Desk_<version>_x64-setup.exe`
- **macOS** (Apple Silicon and Intel): `Simple-Desk_<version>_universal.dmg`. Open it and drag Simple Desk to
  Applications. The app isn't signed with an Apple Developer ID yet, so macOS blocks the first launch: open it once,
  then go to System Settings → Privacy & Security and click **Open Anyway**.
- **Linux** (x86-64):
  - `Simple-Desk_<version>_amd64.AppImage` runs on most distributions: make it executable (`chmod +x`) and run it.
  - `Simple-Desk_<version>_amd64.deb` for Debian and Ubuntu, `Simple-Desk_<version>_x86_64.rpm` for Fedora and openSUSE.
- **Android:** `Simple-Desk_<version>_android.apk`. Allow your browser or file manager to install apps when Android asks.

The installed app checks this repository for updates and offers them in Settings → About.

The source code is private. This repository holds the release files and the update feed (`latest.json`), which the
release pipeline publishes automatically, and the website's source in [`site/`](site/), built and deployed to GitHub
Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
