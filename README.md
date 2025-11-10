# Quizzofy MVP

A gamified learning platform that turns boring PDFs into addictive games!

## Features

- 🎮 **Snake Game** - Play while your notes are "processing"
- 📚 **Interactive Learning** - Bite-sized lessons with smooth animations
- 🎯 **Quiz System** - Multiple question types (True/False, Multiple Choice, Fill in the Blank)
- ✨ **Points & Rewards** - Earn points for learning
- ⛄ **Snowman Collection** - Build snowmen by completing sessions
- 🛒 **Store** - Buy themes and cosmetics with your points
- 🎨 **Multiple Themes** - Default, Pixel, Neon, Dark, and Nature themes
- 📱 **Mobile Responsive** - Works great on all devices

## Getting Started

### Installation

```bash
cd quizzofy-app
npm install
```

### Running the App

```bash
npm run dev
```

Then open your browser to the URL shown (usually http://localhost:5173)

### Building for Production

```bash
npm run build
```

## How to Use

1. **Landing Page** - Click or drag-and-drop to "upload" a file (simulated)
2. **Snake Game** - Play for ~65 seconds while the app "processes" your notes
3. **Session Map** - See 8 sessions, complete them to unlock the next
4. **Learning Phase** - Read 4 slides per session, earn +5 points per slide
5. **Quiz Phase** - Answer 6 questions, earn +10 for correct, -5 for wrong
6. **Complete Session** - Get celebration, earn snowman parts, unlock next session
7. **Collection** - View your snowman building progress
8. **Store** - Buy themes and cosmetics with your points

## Content

The MVP includes placeholder content for two topics:
- **Cell Biology** - 8 sessions covering cell structure, mitosis, DNA, respiration, photosynthesis, transport, enzymes, and cell cycle
- **Business Management** - 8 sessions covering leadership, strategy, team management, communication, decision making, motivation, change, and performance

## Technologies

- React 18
- Vite
- Canvas Confetti (for celebrations)
- Howler.js (for sounds - to be integrated)
- Pure CSS animations

## Next Steps for Production

- [ ] Integrate real AI for PDF processing
- [ ] Add user authentication
- [ ] Implement cloud save
- [ ] Add more games beyond Snake
- [ ] Add leaderboards
- [ ] Add spaced repetition
- [ ] Add teacher dashboard
- [ ] Implement sound effects with Howler.js

## SVG Assets Needed

For the final version, you'll want to create/generate these SVG assets:

1. **Snowman Parts** (5 parts: base, middle, head, hat, scarf)
2. **Learning Slide Visuals** - Diagrams for each topic
3. **Store Item Previews** - Theme previews
4. **Icons** - Custom icons for various UI elements

## Notes

- All data is stored in localStorage (no backend)
- The "upload" is simulated - it randomly selects a topic
- Themes are fully functional and can be purchased/applied
- Mobile responsive with touch-optimized controls for Snake
- ADHD-friendly design with vibrant colors and smooth animations
