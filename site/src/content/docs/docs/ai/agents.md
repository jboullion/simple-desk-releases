---
title: Connecting agents (MCP)
description: Let Claude Desktop, Claude Code, Codex or any MCP client work in your Simple Desk library.
---

Simple Desk can act as an [MCP](https://modelcontextprotocol.io) server, so AI agents on your computer (Claude Desktop,
Claude Code, Codex, or any MCP client) can read and edit your documents, tables, boards, PDFs, pictures and to-dos while
Simple Desk is open. Their edits
appear live, with their name on the cursor, and every change is listed in
[AI activity](/docs/ai/activity/), where you can jump to it or undo it.

This is in the desktop app only, and off until you turn it on.

## Claude Desktop

1. Open **Settings → AI → MCP**.
2. Press **Add to Claude Desktop**. Simple Desk makes a Claude Desktop extension (`Simple Desk.mcpb`) for this computer
   and opens it, and Claude Desktop shows its **Install** dialog.
3. Install it. If the dialog doesn't appear, install the file from Claude Desktop → Settings → Extensions → Advanced
   settings → **Install Extension…**.

## Claude Code, Codex and other clients

1. In **Settings → AI → MCP**, tick **Enable MCP server**.
2. Copy the entry for your agent. For Claude Code it's a command to run in a terminal; for others it's a snippet for the
   agent's configuration file.

Agents start a small helper (`simple-desk-agent --mcp`) that talks to the agent over standard input and output and starts
Simple Desk if it isn't running. **Advanced** shows the raw endpoint (`http://127.0.0.1:47321/mcp`, Streamable HTTP with
a bearer token) for clients that connect over HTTP.

For Claude Code, the MCP tab shows a command to run in a terminal, with your app's path filled in:

```sh
claude mcp add simple-desk -- "<path to Simple Desk>" --mcp
```

For Codex, it shows an entry for `~/.codex/config.toml`:

```toml
[mcp_servers.simple-desk]
command = "<path to Simple Desk>"
args = ["--mcp"]
```

## Permissions

- **What agents may do:** **Read only**, **Read and edit**, or **Full**. Full also lets an agent delete and overwrite
  (deleting to-dos, overwriting a file), and each of those asks you first. Sending an API request to another computer
  also needs Full; requests to your own computer only need Read and edit.
- **Ask me before every edit:** each change waits for your OK.
- **Apps agents can use:** turn off the app tools an agent doesn't need, so it has fewer to read through. Files and
  tabs are always on.

## What agents can do

| App | What an agent can do |
|---|---|
| Files and tabs | List and search your library, read any file (pictures as images), edit or create text files, open files, see your open tabs |
| Markdown | Read with an outline, make focused edits, insert under a heading, create documents |
| HTML and other text | Read and edit like any text file |
| JSON | Read by path, edit values, format, minify or sort keys |
| CSV | Read and query rows, edit cells, add or delete rows and columns, sort; Excel and OpenDocument sheets too |
| Board | Read the board, add, update and delete elements, comment, take a snapshot, create boards |
| Calculator | Read and edit graphs, analyze them (roots, intersections), evaluate expressions, create graphs |
| PDF | Read text, look at pages, fill forms, add text, rotate, delete, move, insert or extract pages |
| Paint | Edit a picture (resize, crop, rotate, shapes, text, fill), create pictures, generate them with your image service |
| Meme Maker | Read and edit memes, search templates, create memes |
| API client | Read and edit collections (secret values stay hidden), send requests, create collections |
| Images | Inspect files, convert and resize, make icon sets, turn video into GIF or WebP |
| To-do | List, add, update, complete and delete to-dos |

Agents only reach your library and the locations you've added in the Files panel. Only programs on your own computer can
connect (`127.0.0.1`), and only with the secret token. What an agent does with what it reads is up to that agent and the
AI service behind it.
