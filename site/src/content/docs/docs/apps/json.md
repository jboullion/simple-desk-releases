---
title: JSON
description: Format, minify, validate and repair JSON, and browse it as a tree.
---

A JSON editor with a tree view beside the text. It opens `.json`, `.jsonc` and `.geojson` files, and anything you paste
into a new one. Turn it on in **Settings → Apps**.

## Format without surprises

**Format** (2 spaces, 4 spaces or tabs; **Shift+Alt+F**), **Minify** and **Sort keys** only change the layout. Numbers keep
their exact text (big ids like `12345678901234567890` and `1.0` survive), and so do duplicate keys and, in JSONC,
comments. Each is one undo step. Pasting JSON over the whole document formats it (there's a toggle in the toolbar).

## Errors and repair

Errors are underlined with a plain message ("Trailing comma", "Use double quotes…"). The status bar shows the first one
with its line and column; click it to jump there.

When the text isn't valid JSON but can be fixed (single quotes, unquoted keys, trailing commas, comments, Python's
`True`/`None`, Markdown code fences), a banner offers **Repair**.

## The tree

Show **Text**, **Text and tree**, or **Tree**. The tree has a filter, Expand/Collapse all and arrow-key navigation, and
follows the cursor. Click a node to select it in the text; right-click to copy its path (like `$.users[3].email`), key
or value.

## Comments

`.jsonc` files, `tsconfig*.json`, `launch.json` and similar files allow comments. Click **JSON** in the status bar to
switch any file between JSON and JSON with comments.

`.api.json` and `.graph.json` files still open in their own apps; JSON is offered under **Open with**.
