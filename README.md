# 🎹 PianoMaster - Interactive Virtual Piano

A modern, feature-rich virtual piano application built with React, TypeScript, and Web Audio API. Create beautiful music using your computer keyboard or mouse, learn with interactive lessons, and customize your experience with comprehensive settings.

![PianoMaster Demo](https://cdn.builder.io/api/v1/assets/19abc20a9b22447183d41b2dafed2e08/image-2dce6e?format=webp&width=800)

## ✨ Features

### 🎵 Interactive Piano

- **Full Piano Interface**: Beautiful, responsive piano keyboard with white and black keys
- **Keyboard Support**: Play piano using your computer keyboard with intuitive QWERTY mapping
- **Mouse Support**: Click piano keys directly for instant sound playback
- **Real-time Audio**: High-quality sound synthesis using Web Audio API
- **Visual Feedback**: Keys animate and highlight when pressed
- **Note Display**: See which notes you're playing in real-time

### 📚 Educational Content

- **Structured Lessons**: Comprehensive piano lessons for all skill levels
- **Beginner to Advanced**: Carefully designed curriculum from basics to complex techniques
- **Progress Tracking**: Track your learning progress across all lessons
- **Interactive Tutorials**: Hands-on learning with immediate feedback

### ⚙️ Customization

- **Audio Settings**: Adjust volume, audio quality, latency, and effects
- **Keyboard Mapping**: Configure keyboard layouts and octave shifts
- **Display Options**: Customize themes, animations, and visual preferences
- **Personalization**: Save your settings and preferences

### 🌐 Modern Web App

- **Progressive Web App**: Install on desktop and mobile devices
- **Responsive Design**: Works perfectly on all screen sizes
- **Offline Support**: Core functionality available without internet
- **Fast Performance**: Optimized for smooth, lag-free experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pianomaster
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`
   - Start playing immediately!

### Production Build

```bash
npm run build
npm start
```

## 📱 Pages & Features

### 🏠 Homepage

- **Hero Section**: Beautiful introduction to PianoMaster
- **Feature Overview**: Comprehensive list of app capabilities
- **Call-to-Action**: Direct links to piano and lessons
- **Modern Design**: Gradient backgrounds and glass morphism effects

### 🎹 Piano Interface

- **Interactive Keyboard**: Full piano keyboard with 15 keys spanning octaves
- **Key Mappings**: QWERTY keyboard support (A-L keys map to piano notes)
- **Audio Controls**: Volume control, mute/unmute functionality
- **Note History**: Display of recently played notes
- **Real-time Synthesis**: Instant audio feedback with Web Audio API

**Keyboard Mapping:**

```
A → C4    W → C#4   S → D4    E → D#4   D → E4
F → F4    T → F#4   G → G4    Y → G#4   H → A4
U → A#4   J → B4    K → C5    O → C#5   L → D5
```

### 📖 Lessons

- **Beginner Lessons**: Piano basics, hand position, simple scales
- **Intermediate Skills**: Chord progressions, rhythm patterns, popular songs
- **Advanced Techniques**: Jazz improvisation, classical pieces, performance tips
- **Progress Tracking**: Visual progress indicators and completion status
- **Structured Learning**: Carefully sequenced curriculum

### ⚙️ Settings

- **Audio Configuration**: Master volume, audio quality, latency settings
- **Keyboard Settings**: Key mapping, octave shift, velocity sensitivity
- **Display Preferences**: Themes, animations, visual options
- **Persistence**: Settings saved to localStorage

### ℹ️ About

- **App Information**: Detailed description of features and capabilities
- **Technology Stack**: Complete list of technologies used
- **Mission Statement**: Our commitment to music education
- **Contact Information**: Ways to get in touch and provide feedback

## 🛠️ Technology Stack

### Frontend

- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Full type safety and developer experience
- **Vite**: Ultra-fast build tool and development server
- **React Router 6**: Client-side routing with SPA mode
- **TailwindCSS 3**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI components

### Audio & Interaction

- **Web Audio API**: Real-time audio synthesis and processing
- **React Hotkeys Hook**: Keyboard event handling
- **Custom Audio Engine**: Optimized piano sound generation

### UI/UX

- **Responsive Design**: Mobile-first, works on all devices
- **Modern Aesthetics**: Glass morphism, gradients, smooth animations
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation
- **Performance**: Optimized components and lazy loading

### Backend (Optional)

- **Express.js**: Lightweight API server
- **TypeScript**: Shared types between client and server
- **Serverless Ready**: Can be deployed to serverless platforms

## 📂 Project Structure

```
pianomaster/
├── client/                 # React frontend
│   ├── components/ui/      # Reusable UI components
│   │   ├── navigation.tsx  # App navigation
│   │   ├── piano-key.tsx   # Interactive piano key
│   │   └── ...            # Other UI components
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── Piano.tsx      # Interactive piano
│   │   ├── Lessons.tsx    # Educational content
│   │   ├── Settings.tsx   # App configuration
│   │   └── About.tsx      # App information
│   ├── App.tsx            # Main app component
│   └── global.css         # Global styles and themes
├── server/                # Express backend (optional)
├── shared/                # Shared types and utilities
└── public/                # Static assets
```

## 🎵 How to Play

### Using Keyboard

1. **Basic Notes**: Use A-L keys to play piano notes
2. **Black Keys**: Use W, E, T, Y, U, O for sharp/flat notes
3. **Multiple Notes**: Press multiple keys simultaneously for chords
4. **Sustained Play**: Hold keys for sustained notes

### Using Mouse

1. **Click Keys**: Click any piano key to play the note
2. **Drag Playing**: Hold mouse down and drag across keys
3. **Visual Feedback**: Keys highlight when pressed

### Learning

1. **Start with Lessons**: Visit the Lessons page for structured learning
2. **Practice Scales**: Begin with basic scales and progressions
3. **Track Progress**: Monitor your completion status
4. **Customize Settings**: Adjust audio and display preferences

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm test             # Run test suite
npm run typecheck    # TypeScript validation
npm run format.fix   # Format code with Prettier
```

### Key Development Features

- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint + Prettier**: Code quality and formatting
- **Path Aliases**: Clean imports with @ aliases
- **Component Library**: Pre-built, customizable UI components

## 🌟 Advanced Features

### Audio Engine

- **Custom Synthesis**: Optimized Web Audio API implementation
- **Low Latency**: Minimal delay between input and sound
- **Quality Options**: Adjustable audio quality for performance
- **Volume Control**: Master volume and individual note control

### Responsive Design

- **Mobile Optimized**: Touch-friendly piano interface
- **Tablet Support**: Perfect layout for tablet music making
- **Desktop Power**: Full feature set on desktop computers
- **Cross-Platform**: Consistent experience across devices

### Performance Optimizations

- **Lazy Loading**: Components load on demand
- **Memoization**: Optimized re-renders with React.memo
- **Efficient State**: Minimal state updates for smooth performance
- **Bundle Splitting**: Optimal code splitting for fast initial load

## 🚀 Deployment

### Static Hosting

```bash
npm run build
# Deploy the 'dist' folder to any static host
```

### Docker

```bash
docker build -t pianomaster .
docker run -p 8080:8080 pianomaster
```

### Serverless

- **Netlify**: Direct integration support
- **Vercel**: Zero-config deployment
- **AWS/GCP**: Serverless function support

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- **Code Quality**: Follow TypeScript and ESLint rules
- **Testing**: Add tests for new features
- **Documentation**: Update README for significant changes
- **Accessibility**: Ensure features are accessible

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

### Upcoming Features

- **MIDI Support**: Connect external MIDI keyboards
- **Recording**: Record and playback your performances
- **Sharing**: Share recordings with friends
- **More Instruments**: Guitar, drums, and other instruments
- **Collaboration**: Real-time multiplayer piano sessions
- **Advanced Lessons**: Video tutorials and expert instruction

### Performance Improvements

- **WebAssembly**: Enhanced audio processing
- **Service Workers**: Better offline experience
- **Caching**: Intelligent asset caching

## 🙏 Acknowledgments

- **Web Audio API**: Making browser-based audio synthesis possible
- **React Community**: For amazing tools and libraries
- **Music Educators**: Inspiring our educational approach
- **Open Source**: Standing on the shoulders of giants

## 📞 Support

### Getting Help

- **Documentation**: Check this README for comprehensive information
- **Issues**: Report bugs or request features on GitHub
- **Discussions**: Join community discussions for questions

### Contact

- **Email**: [contact@pianomaster.app]
- **GitHub**: [github.com/pianomaster]
- **Website**: [pianomaster.app]

---

**Made with ❤️ for the music community**

Start your musical journey today with PianoMaster! 🎹🎵
