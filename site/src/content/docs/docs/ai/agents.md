---
title: Connecting agents (MCP)
description: Let Claude Desktop, Claude Code, Codex or any MCP client work in your Simple Desk library.
---

Simple Desk can act as an [MCP](https://modelcontextprotocol.io) server, so AI agents on your computer (Claude Desktop,
Claude Code, Codex, or any MCP client) can read and edit your documents and to-dos while Simple Desk is open. Their edits
appear live, with their name on the cursor, and can be undone like the [AI sidebar](/docs/ai/sidebar/)'s.

This is in the desktop app only, and off until you turn it on.

## Claude Desktop

1. Open **Settings → AI → Local**.
2. Press **Add to Claude Desktop**. Simple Desk makes a Claude Desktop extension (`Simple Desk.mcpb`) for this computer
   and opens it, and Claude Desktop shows its **Install** dialog.
3. Install it. If the dialog doesn't appear, install the file from Claude Desktop → Settings → Extensions → Advanced
   settings → **Install Extension…**.

## Claude Code, Codex and other clients

1. In **Settings → AI → Local**, tick **Allow agents to connect**.
2. Copy the entry for your agent. For Claude Code it's a command to run in a terminal; for others it's a snippet for the
   agent's configuration file.

Agents start a small helper (`simple-desk-agent --mcp`) that talks to the agent over standard input and output and starts
Simple Desk if it isn't running. **Advanced** shows the raw endpoint (`http://127.0.0.1:47321/mcp`, Streamable HTTP with
a bearer token) for clients that connect over HTTP.

## Permissions

- **What agents may do:** read only, read and edit, or full.
- **Ask me before every edit:** each change waits for your OK.

Agents only reach your library and the locations you've added in the Files panel. Only programs on your own computer can
connect (`127.0.0.1`), and only with the secret token. What an agent does with what it reads is up to that agent and the
AI service behind it.
