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
  'Google Chat uses different text formatting than standard Markdown. ' +
  'Supported: *bold* (single asterisk), _italic_ (single underscore), ' +
  '~strikethrough~, `inline code`, ```code blocks```, ' +
  'bulleted lists (lines starting with "* " or "- "), ' +
  'and links as <url|display text>. ' +
  'User mentions use <users/{user}> syntax. ' +
  'Convert standard Markdown: **bold** → *bold*, *italic* → _italic_, ' +
  '[text](url) → <url|text>. ' +
  'Not supported: # headings, > blockquotes.';

/**
 * Short formatting instructions for Chat message parameter descriptions.
 */
export const CHAT_FORMATTING_SHORT =
  'Google Chat formatting (not standard Markdown): ' +
  '*bold* (single asterisk), _italic_ (single underscore), ' +
  '~strikethrough~, `code`, bulleted lists ("* " or "- "), ' +
  '<url|text> links, <users/{user}> mentions. ' +
  'Convert: **bold** → *bold*, *italic* → _italic_, [text](url) → <url|text>.';
