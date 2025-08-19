# 🤖 AI Tutor - Intelligent Learning Companion

A comprehensive React Native Expo application powered by Mastra AI, designed to provide personalized tutoring experiences with advanced AI capabilities including RAG (Retrieval-Augmented Generation), memory systems, real-time streaming, automated workflows, evaluation systems, voice interactions, and MCP (Model Context Protocol) server integration.

## ✨ Features

### 🧠 Core AI Capabilities
- **RAG Implementation**: Intelligent document processing and contextual question answering
- **Memory System**: Persistent learning progress tracking and personalized recommendations
- **Real-time Streaming**: Live AI responses for interactive learning sessions
- **Automated Workflows**: Smart lesson planning and progress evaluation
- **Evaluation System**: Comprehensive assessment and performance analytics
- **Voice Integration**: Natural speech-to-text and text-to-speech interactions
- **MCP Servers**: External service integration for expanded functionality

### 📱 Mobile Experience
- **Cross-platform**: iOS and Android support via React Native Expo
- **Offline Capabilities**: Local document storage and basic functionality
- **Responsive Design**: Optimized for various screen sizes and orientations
- **Dark/Light Mode**: Adaptive theming for better user experience
- **Push Notifications**: Smart reminders and learning suggestions

### 🎯 Learning Features
- **Personalized Tutoring**: Adaptive learning paths based on user progress
- **Multi-subject Support**: Mathematics, Science, Language Arts, and more
- **Interactive Exercises**: Gamified learning with instant feedback
- **Progress Tracking**: Detailed analytics and performance insights
- **Study Materials**: Dynamic content generation and document analysis

## 🏗 Architecture

### Tech Stack
- **Frontend**: React Native with Expo
- **AI Framework**: Mastra AI
- **Backend**: Node.js with TypeScript
- **Database**: PostgreSQL with PgVector for embeddings
- **Vector Store**: Pinecone/Weaviate for document retrieval
- **Voice**: Expo Speech and Audio APIs
- **State Management**: Zustand/Redux Toolkit
- **Authentication**: Expo Auth Session with OAuth providers

### System Components
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Mobile App    │────│   Mastra AI      │────│   Vector DB     │
│  (React Native) │    │   (Core Engine)  │    │  (Embeddings)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Voice APIs     │    │   MCP Servers    │    │   Workflows     │
│  (Speech I/O)   │    │  (External APIs) │    │  (Automation)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Expo CLI (`npm install -g @expo/cli`)
- PostgreSQL database
- API keys for AI services (OpenAI, Anthropic, Google)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OliverMengich/ai-tutor.git
   cd ai-tutor
   ```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.local .env
```
Configure your `.env` file:
```env
   # AI Service Keys
   OPENAI_API_KEY=your_openai_key
   GEMINI_API_KEY=your_gemini_key
   
   # Database
   POSTGRES_CONNECTION_STRING=postgresql://username:password@localhost:5432/ai_tutor
   
   # Expo Configuration
   EXPO_PUBLIC_API_URL=http://localhost:3000
```

### Debugging
- Use Flipper for React Native debugging
- Enable Mastra AI debug logging: `MASTRA_DEBUG=true`
- Monitor vector database queries with PgAdmin
- Use Expo Developer Tools for mobile debugging

### Performance Benchmarks
- Response latency: < 2 seconds for streaming
- RAG retrieval: < 500ms for document queries
- Memory operations: < 100ms for context retrieval
- Voice processing: < 1 second for transcription

## 🔧 Configuration

### Mastra AI Configuration
```typescript
// config/mastra.config.ts
export const mastraConfig = {
  agents: {
    tutor: {
      model: 'gemini-2.0-flash-exp',
      temperature: 0.7,
      maxTokens: 2048
    }
  },
  memory: {
    provider: 'postgres',
    ttl: 86400 // 24 hours
  },
  rag: {
    chunkSize: 1000,
    chunkOverlap: 200,
    embeddingModel: 'text-embedding-004'
  },
  workflows: {
    maxConcurrent: 5,
    timeout: 30000
  }
};
```
### Learning Analytics
- User engagement metrics
- Learning progress tracking
- Performance improvement analysis
- Subject-specific insights

### Technical Monitoring
- AI response quality metrics
- API usage and costs
- Mobile app performance
- Error tracking and debugging

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the full test suite: `npm run test:all`
5. Submit a pull request

### Code Standards
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Conventional commits for clear history
- 80%+ test coverage requirement

### AI Model Guidelines
- Test all AI integrations with evaluation frameworks
- Monitor response quality and accuracy
- Document prompt engineering decisions
- Implement fallback mechanisms for API failures

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Mastra AI Documentation](https://mastra.ai/docs)
- [React Native Documentation](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)

### Community
- [GitHub Issues](https://github.com/your-username/ai-tutor-app/issues)
- [Discord Community](https://discord.gg/your-discord)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/ai-tutor)

### Contact
- Email: support@ai-tutor-app.com
- Twitter: [@AiTutorApp](https://twitter.com/AiTutorApp)
- Website: [https://ai-tutor-app.com](https://ai-tutor-app.com)

---

Built with ❤️ using Mastra AI, React Native, and the power of intelligent tutoring systems.