---
title: API client
description: Send HTTP requests with variables and environments; import cURL commands and Postman collections.
---

A small API client for testing web APIs. Turn it on in **Settings → Apps**.

## Collections

A collection is one `.api.json` file, friendly to version control, with requests in folders, collection variables,
environments and collection-wide auth.

## Variables

Write `{{name}}` in the URL, params, headers, body or auth.

- Variables are highlighted: green when defined, red when missing. They autocomplete after `{{` and show their value
  when you hover.
- Built-ins: `{{$timestamp}}`, `{{$isoTimestamp}}`, `{{$randomUUID}}` and `{{$randomInt}}`.
- Variables marked **secret** are stored on this computer only, never in the file.

## Sending

**Ctrl+Enter** sends. Requests go out from the app itself rather than a browser, so there are no CORS limits, and
`localhost` and self-signed certificates work. There are settings for cancel, timeout, redirects and TLS.

## Import and export

- Paste a `curl` command into the URL bar to import it; **cURL** copies any request as a curl command.
- Postman v2.1 collections and environments import.
