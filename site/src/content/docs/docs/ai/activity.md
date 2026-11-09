---
title: AI activity and undo
description: See every change an AI or connected agent made, and take back one change, a group, or all of them.
---

Whether a change comes from the [AI sidebar](/docs/ai/sidebar/) or from an [agent connected over MCP](/docs/ai/agents/),
Simple Desk records it and lets you take it back. You can always see who changed what, and nothing an AI does has to be
permanent.

## What gets recorded

Every change an AI makes is recorded:

- creating a file, overwriting a file, or editing a Markdown document;
- adding, updating, completing, reopening or deleting to-dos;
- placing a generated picture in Paint.

Reading isn't recorded. When an AI opens, searches or reads your files, nothing is added to the list. Actions that were
refused, that you didn't allow, or that failed aren't recorded either, because nothing changed.

## Who did it

Each AI has a name and a color, used everywhere its work shows up:

- **In the sidebar**, the AI is named after its model service (for example "Claude" or "GPT").
- **Connected agents** are named after the program: Claude, Claude Code, Codex, Cursor, or the name the program gives
  itself.

When an AI edits a Markdown document that's open, a caret in its color, with its name on it, marks where it edited for a
few seconds. That way you can watch an agent work in the same document as you.

## The Activity list

**Settings → AI** has an **Activity** section below both the API and Local tabs. It lists every change made since the
app started, newest first. Each row shows:

- the time;
- who made the change, in their color (point at the name to see whether it came from the AI sidebar or a connected
  agent);
- what changed, like "Edited plan.md" or "Completed 3 to-dos". Point at it to see the exact action and its settings.

**Grouping.** A run of changes by the same AI to the same document becomes one row, like "Edited plan.md · 22 changes",
with the time range. A change stays in the run if it came within three minutes of the one before. **Undo all** takes back
the whole group. Click the row to open it and undo single changes.

The list lives in memory. It's cleared when you quit Simple Desk, keeps the last 500 changes, and **Clear list** empties
it at any time. Clearing the list doesn't touch your files.

## Undoing a change

There are two places to undo:

- **In the sidebar**, every change shows as a chip under the AI's reply. Its **Undo** button takes back just that change.
- **In Settings → AI → Activity**, use **Undo** on a single change or **Undo all** on a group. Undo all goes newest
  first, so each step applies to the text it was made on.

An undone change is struck through and marked **Undone**. What Undo does depends on what was changed:

| What the AI changed | What Undo does |
|---|---|
| A Markdown document open in a tab | Takes back only that edit, even after you or the AI kept typing elsewhere in the document. The tab shows unsaved changes; save as usual. |
| A file that wasn't open | Puts back the whole file as it was before the AI wrote it. Anything changed in that file since then is replaced too. |
| A new file the AI created | Moves the file to the Recycle Bin (the Trash on macOS and Linux), so you can still get it back. |
| To-dos | Puts back just the to-dos that change touched, as they were before. Your other to-dos aren't affected. |
| A picture in Paint | Not in the Activity list's Undo. The picture arrives as a selection you can move; keep it, or press **Ctrl+Z** in Paint. |

**Ctrl+Z works too.** In a Markdown document, each AI edit is its own step in the editor's undo history, so pressing
Ctrl+Z right after an AI edit takes it back. Use the Undo button when you want one AI edit gone and everything after it
kept.

**Keep the document open** to undo an edit made in a tab. If you close the tab first, its edit can't be undone from the
list any more (you'll see "The document was closed"). Edits made to files on disk can still be undone after closing.

## Asking first

Some changes wait for your OK instead of being undone afterwards:

- **Overwriting a file** or **deleting to-dos** always opens an "Allow … to continue?" dialog, with the AI's name and
  what it wants to do. **Don't allow** stops the action, and the AI is told you declined.
- For connected agents, **Settings → AI → Local** lets you choose what agents may do: read only, read and edit, or
  full. You can also turn on **Ask me before every edit**, so each change waits for your OK.

See [Connecting agents](/docs/ai/agents/#permissions) for the agent settings.
