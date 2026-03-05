#!/usr/bin/env node
/**
 * build-llms.js — Concatenates all markdown docs into llms-full.txt
 * Run: node build-llms.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, 'docs');
const OUTPUT = path.join(__dirname, 'llms-full.txt');

const FILES = [
  'getting-started.md',
  '00-architecture-overview.md',
  '01-agent-loop.md',
  '02-providers.md',
  '03-tools-system.md',
  '04-gateway-protocol.md',
  '05-channels-messaging.md',
  '06-store-data-model.md',
  '07-bootstrap-skills-memory.md',
  '08-scheduling-cron-heartbeat.md',
  '09-security.md',
  '10-tracing-observability.md',
  '11-web-dashboard.md',
  'api-reference.md',
  'websocket-protocol.md',
];

let output = `# GoClaw — Complete Documentation\n\n`;
output += `> GoClaw is a multi-agent AI gateway written in Go. It connects LLMs to tools, channels, and data via WebSocket RPC and OpenAI-compatible HTTP API.\n\n`;
output += `---\n\n`;

for (const file of FILES) {
  const filepath = path.join(DOCS_DIR, file);
  if (!fs.existsSync(filepath)) {
    console.warn(`Warning: ${file} not found, skipping`);
    continue;
  }
  const content = fs.readFileSync(filepath, 'utf-8');
  output += content.trim() + '\n\n---\n\n';
}

fs.writeFileSync(OUTPUT, output.trim() + '\n');
console.log(`Generated ${OUTPUT} (${(output.length / 1024).toFixed(1)} KB)`);
