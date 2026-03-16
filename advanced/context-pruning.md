# Context Pruning

> Automatically trim old tool results to keep agent context within token limits.

🚧 **This page is under construction.** Content coming soon.

## Overview

Context Pruning is separate from [session compaction](../core-concepts/sessions-and-history.md). While compaction summarizes entire conversation history, pruning selectively trims large tool results using a two-phase approach: **soft trim** (truncate to head+tail) and **hard clear** (replace with placeholder). Activated via `cache-ttl` mode.

## What's Next

- [Sessions & History](../core-concepts/sessions-and-history.md)
- [Memory System](../core-concepts/memory-system.md)
- [Configuration Reference](../reference/config-reference.md)
