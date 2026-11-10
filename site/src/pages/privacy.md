---
layout: ../layouts/LegalLayout.astro
title: Privacy policy
description: What Simple Desk and this website do with your data. Short version, almost nothing leaves your device.
---

Simple Desk is a free office app for Windows, macOS, Linux and Android, made by one developer, James Boullion. This
page explains what the app and this website do with your information. The short version: **your documents and
settings stay on your device, there's no account, and nothing is tracked.**

## In short

- No account, no sign-up, no ads.
- No analytics, telemetry or crash reports, in the app or on this website.
- Your documents, settings and to-dos are stored on your own device.
- The app connects to the internet to check for updates, and for features you choose to use that need it (AI,
  live sharing, Meme Maker templates, the API client). Each is described below.

## What stays on your device

- **Your documents** are ordinary files in a folder you choose (the "library", by default `Documents/Simple Desk`)
  and in any other folders you add. Simple Desk doesn't upload or sync them. If you put your library in a OneDrive,
  Dropbox or Google Drive folder, that service syncs it under its own privacy policy.
- **Settings, to-dos and recent files** are kept in a settings file in the app's data folder on your device.
- **AI keys** and the token agents use to connect are stored in your operating system's credential store (Windows
  Credential Manager, macOS Keychain, or the Secret Service on Linux), not in a settings file.
- **Shared-document keys** and "secret" variables in the API client are stored in the settings file on your device.

## When the app connects to the internet

### Update checks

A few seconds after it starts and then every six hours, the app downloads a small file (`latest.json`) from this
project's [GitHub releases](https://github.com/jboullion/simple-desk-releases/releases) to see whether a new version
is out. Like any web request, this tells GitHub your IP address and the app's version (in the user agent). When you
choose to update, the new version is downloaded from GitHub too. You can turn automatic checks off in **Settings →
About**.

GitHub's handling of that data is covered by the
[GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

### AI features (optional, off until you set them up)

When you use the AI sidebar or Paint's **Generate**, the app sends your request straight from your device to the AI
service you chose, using your own key. Nothing passes through a server of mine. What's sent:

- your messages, and the content the AI reads to answer (for example the text of a document or file you ask about);
- a short description of your workspace so the AI can find things: the names of open tabs, file paths, your
  library's location, and the local date and time;
- for image generation, your prompt and the picture size.

That service (for example Anthropic, OpenAI, OpenRouter, xAI or fal.ai) handles the data under its own privacy policy
and terms. If you use a model running on your own computer (such as Ollama), the data stays on your computer. Fetching
a service's list of models also contacts that service.

### Agents (MCP, optional, desktop only)

If you enable the MCP server (Settings → AI → MCP), the app accepts connections **only from your own computer**
(`127.0.0.1`), and only with a secret token. It's off by default. What a connected agent does with what it reads is up
to that agent and the AI service behind it.

### Live sharing (optional)

When you share a Markdown document, edits travel through a relay server that I run. Everything about the document is
**end-to-end encrypted** on your device before it's sent: its text, the edits, and people's names and cursors. The
key is part of the share link (after the `#`), which is never sent to the relay.

The relay can see the IP addresses of connected devices, a random room id for each shared document, when and how
much data is sent, and the encrypted data itself, which it can't read. It stores the encrypted updates so people who
join later get the document, and deletes a room when nobody has opened it for 180 days. IP addresses are kept in
memory only, to limit abuse, and are not logged.

Anyone who has a share link can read and edit that document, so share links only with people you trust. The name
other people see next to your cursor starts as your computer's user name; you can change it under **Your name** in
Settings → General.
You can also point the app at a different relay in Settings → Sharing.

### Meme Maker templates

Opening the Meme Maker (off by default) downloads the list of popular templates from [Imgflip](https://imgflip.com)
at most once a day, and the template pictures from Imgflip's image server. Imgflip sees your IP address.

### API client

The API client (off by default) sends the requests you write to the addresses you choose, and nothing else.

### Content in your documents

If a Markdown document shows a picture from the web, the app loads that picture from its website, which then sees
your IP address, as a browser would. Links you click open in your web browser.

## This website

This website has **no cookies and no analytics**. It's hosted on GitHub Pages, and the downloads are served from
GitHub releases. GitHub may log visitors' IP addresses for security and to keep the service running; see the
[GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
If you pick a light or dark theme, that choice is saved in your browser only.

If you follow a link to another site (for example GitHub, an AI provider or a donation page), that site's own privacy
policy applies.

## Email

If you email me, I'll use your address and message only to reply, and won't share them.

## Children

Simple Desk isn't directed at children under 13, and it doesn't collect personal information from anyone.

## Changes to this policy

If the app starts sending anything new, this page will be updated before or with that release, and the date at the
top will change.
