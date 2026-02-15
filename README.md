## STIMULA (Professor KPOP)

# (VIDEO CREATION PIPLINE REDACTED)

Turn plain text into short-form educational videos automatically.

STIMULA generates a full video from a single prompt. The system writes a script, generates dialogue using AI voice models, adds captions, overlays characters, inserts background footage, and renders a finished vertical video ready for social media.

Built in 48 hours at a hackathon.

---

## Overview

STIMULA is an automated educational video generator designed for short-form content platforms.  
Users provide a topic, and the system produces a complete conversation-style video between characters.

The pipeline:
1. Prompt → AI script
2. Script → AI voices
3. Voices → captions
4. Media assets → assembled video
5. Render → exportable short-form video

No manual editing required.

---

## Tech Stack

### Frontend
- React.js
- HTML / CSS
- Figma (UI design)

### Backend
- Python
- FastAPI

### AI + Media Processing
- OpenAI API — script generation
- ElevenLabs Multilingual v2 — voice synthesis
- OpenAI Whisper — caption transcription
- MoviePy — video rendering
- FFMPEG — final video stitching

---

## Voice Models

We trained 24 custom voice models using over 4+ hours of collected voice lines.

Examples include:
- KIM CHAEWON
- CAILLOU
- PETER GRIFFIN

The voices are used to simulate a conversation format that keeps viewer retention high for short-form content.

---

## How It Works

1. User enters a topic
2. OpenAI generates a conversation script
3. Dialogue lines are assigned to AI characters
4. ElevenLabs generates speech for each line
5. Whisper generates captions
6. MoviePy combines:
   - background footage
   - speaker PNGs
   - captions
   - music
   - audio dialogue
7. FFMPEG exports the final video

---
