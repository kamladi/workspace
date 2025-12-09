/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Formatting instructions for Google Chat messages.
 * Append to tool descriptions that send formatted text to Chat.
 */
export const CHAT_FORMATTING =
  'Google Chat supports a limited subset of Markdown: ' +
  '*bold*, _italic_, ~strikethrough~, `inline code`, ```code blocks```, ' +
  'bulleted lists (lines starting with "* " or "- "), ' +
  'and links as <url|display text>. ' +
  'User mentions use <users/{user}> syntax. ' +
  'Standard Markdown syntax like **bold**, # headings, [links](url), ' +
  'and > blockquotes are NOT supported. ' +
  'Convert [text](url) links to <url|text> format before sending.';

/**
 * Short formatting instructions for Chat message parameter descriptions.
 */
export const CHAT_FORMATTING_SHORT =
  'Supported: *bold*, _italic_, ~strikethrough~, `code`, ' +
  'bulleted lists ("* " or "- "), <url|text> links, <users/{user}> mentions. ' +
  'Convert [text](url) to <url|text>. ' +
  'Avoid **double asterisks**, # headings, and > blockquotes.';
