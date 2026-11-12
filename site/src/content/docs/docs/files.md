---
title: Opening and saving files
description: Which app opens which file, drag and drop, and how saving works.
---

Simple Desk works on ordinary files. Open one and it lands in the right app, in its own tab; open it again and you're
taken to the tab that already has it.

## Ways to open a file

- **Ctrl+O**, or **Open file…** on Home.
- Click it in the [Files panel](/docs/first-run/#the-files-panel).
- **Drag files onto the window** from Explorer, Finder or your file manager. While you drag, the window shows what a
  drop will do. Drop several at once and each opens in its app.
- From your computer: right-click a file → **Open with → Simple Desk**. If Simple Desk is already running, the file
  opens in the same window.
- Pick a recent file on Home or in the command palette (Ctrl+K).

## Which app opens what

| File | Opens in |
|---|---|
| `.md`, `.markdown` | [Markdown](/docs/apps/markdown/) |
| `.html`, `.htm`, `.xhtml` | [HTML](/docs/apps/html/) |
| `.csv`, `.tsv`, `.xlsx`, `.ods` | [CSV](/docs/apps/csv/) |
| `.pdf` | [PDF](/docs/apps/pdf/) |
| `.png`, `.jpg`, `.webp`, `.bmp`, `.gif`, `.ico` | [Paint](/docs/apps/paint/) |
| `.board.svg` | [Board](/docs/apps/board/) |
| `.graph.json` | [Calculator](/docs/apps/calculator/) |
| `.meme.png` | [Meme Maker](/docs/apps/meme-maker/) |
| `.api.json` | [API client](/docs/apps/api-client/) |
| other `.json`, `.jsonc`, `.geojson` | [JSON](/docs/apps/json/) |

Some drops do something else on purpose: an image dropped on a board, a Paint canvas or a meme is placed there, and
files dropped on a folder in the Files panel are copied into it.

The Files panel's right-click menu also has **Open with**, for example "Open in Images" to convert a picture, or
opening an `.api.json` as plain JSON.

## Dragging files out

Drag a file from the Files panel out of the Simple Desk window and drop it on another app: Explorer or Finder copies it
there, and Slack, Teams or an email draft attaches it. The original stays where it is. Folders only move inside the
Files panel. This works in the desktop app, not on phones.

## Saving

- **Ctrl+S** saves. A new document asks where to save it the first time, starting in the folder selected in the Files
  panel.
- **Ctrl+Shift+S** saves a copy under a new name.
- A dot on a tab means it has unsaved changes. Closing a tab or the app with unsaved changes asks first.

Simple Desk keeps your files' formats as they are: an unedited CSV saves byte for byte the same, and a Markdown edit only
rewrites the paragraphs you changed.

## File formats you can share

Several apps save files that open elsewhere too, with everything needed to keep editing inside:

- **Boards** (`.board.svg`) open in any web browser as a picture.
- **Memes** (`.meme.png`) are normal PNG pictures.
- **Graphs** (`.graph.json`) and **API collections** (`.api.json`) are readable JSON, good for version control.

Send one of these files to someone with Simple Desk and they can keep editing it.
