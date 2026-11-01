# Azure Certification Quiz Application

A comprehensive React-based quiz application designed to help you prepare for Azure certification exams (AZ-900 and AI-900). Built with TypeScript, Vite, and Tailwind CSS, featuring both practice and examination modes.

## 🚀 Features

### Quiz Modes
- **Practice Mode**: Study specific difficulty levels (Easy, Medium, Hard)
- **Examination Mode**: Mixed difficulty questions simulating real exam conditions

### Exam Coverage
- **AZ-900**: Azure Fundamentals (50 questions)
- **AI-900**: AI Fundamentals (100 questions)
- **Total**: 150+ carefully curated questions

### Question Types
- Multiple Choice Questions (MCQ)
- Drag & Drop Questions
- True/False Table Questions

### User Experience
- 🌙 **Dark/Light Mode**: Seamless theme switching
- 📊 **Progress Tracking**: Real-time progress indicators
- ⏱️ **Timer**: Track time spent on each quiz
- 📈 **Detailed Results**: Comprehensive feedback and analytics
- 💾 **Persistent Storage**: LocalStorage for question management

### Results & Analytics
- **Score Analysis**: Percentage-based scoring
- **Category Breakdown**: Performance by exam topics
- **Personalized Feedback**: 
  - Strong Areas identification
  - Areas for Improvement
  - Targeted Recommendations
- **Visual Charts**: Interactive progress visualization

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Hooks
- **Storage**: LocalStorage API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnmolSharma1711/Azure.git
   cd Azure
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
   ```
   http://localhost:5173
   ```

## 📱 Android APK via GitHub Actions

Every push or pull request targeting `main` runs the Android build workflow. To build manually, open the repository's **Actions** tab, select **Build Android APK**, choose **Run workflow**, and start it.

After a successful run, download `azure-certification-quiz-debug-apk` from the workflow run's **Artifacts** section. The artifact contains `app-debug.apk`.

## 🏗️ Project Structure

```
Azure/
├── src/
│   ├── components/           # React components
│   │   ├── QuizSetup.tsx    # Quiz configuration interface
│   │   ├── QuizInterface.tsx # Active quiz display
│   │   ├── QuizResults.tsx  # Results and analytics
│   │   └── questions/       # Question type components
│   │       ├── MCQQuestion.tsx
│   │       ├── DragDropQuestion.tsx
│   │       └── TrueFalseTableQuestion.tsx
│   ├── data/                # Question databases
│   │   ├── questions.ts     # Main question collection (150 questions)
│   │   └── dragDropQuestions.ts # Drag & drop questions
│   ├── hooks/               # Custom React hooks
│   │   └── useQuiz.ts      # Quiz state management
│   ├── lib/                # Utility libraries
│   │   └── storage.ts      # Question storage & filtering
│   ├── types/              # TypeScript definitions
│   │   └── quiz.ts         # Quiz-related types
│   └── App.tsx             # Main application component
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Usage Guide

### Starting a Quiz

1. **Select Quiz Mode**:
   - **Practice Mode**: Choose specific difficulty level
   - **Examination Mode**: Mixed difficulty questions

2. **Choose Exam Type**:
   - **AZ-900**: Azure Fundamentals
   - **AI-900**: AI Fundamentals

3. **Configure Settings**:
   - Number of questions (5, 10, 20, or 50)
   - Difficulty level (Practice Mode only)

4. **Start Quiz**: Begin your certification preparation!

### During the Quiz

- **Question Navigation**: Answer questions sequentially
- **Progress Tracking**: Monitor completion percentage
- **Time Tracking**: See elapsed time
- **Mode Indicators**: Visual badges showing current mode
- **Answer Validation**: Questions must be answered to proceed

### After Completion

- **Score Analysis**: View percentage score and performance
- **Category Breakdown**: See performance by exam domains
- **Personalized Feedback**: Get targeted improvement suggestions
- **Restart Option**: Begin a new quiz session

## 📊 Question Categories

### AI-900 Categories
- AI Workloads and Considerations
- Machine Learning Fundamentals
- Computer Vision Workloads
- Natural Language Processing Workloads
- Knowledge Mining

### AZ-900 Categories
- Cloud Concepts
- Architecture
- Resource Management
- Security
- Governance
- Cost Management
- Backup and Recovery
- IoT

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Questions

1. **MCQ Questions**: Add to `src/data/questions.ts`
2. **Drag & Drop**: Add to `src/data/dragDropQuestions.ts`
3. **Question Format**:
   ```typescript
   {
     id: 'unique_id',
     question: 'Your question text',
     type: 'mcq' | 'drag-drop' | 'true-false-table',
     options: ['Option A', 'Option B', 'Option C', 'Option D'],
     correct_answer: 'Option A',
     explanation: 'Detailed explanation',
     category: 'Question Category',
     difficulty: 'easy' | 'medium' | 'hard',
     exam_type: 'AZ-900' | 'AI-900'
   }
   ```

### Theme Customization

The app supports dark/light mode switching with Tailwind CSS classes:
- Light mode: Standard Tailwind classes
- Dark mode: `dark:` prefixed classes

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Contribution Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting
- Add questions with proper categorization
- Test both light and dark themes
- Ensure responsive design

## 📈 Future Enhancements

- [ ] Question difficulty analysis and recommendations
- [ ] Study streak tracking
- [ ] Export results to PDF
- [ ] Question bookmarking
- [ ] Study notes integration
- [ ] Performance comparison charts
- [ ] Mobile app version
- [ ] Additional Azure certification exams (AZ-104, AZ-204, etc.)

## 🐛 Known Issues

- None currently reported

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Microsoft Azure**: For comprehensive certification documentation
- **React Community**: For excellent development tools
- **Tailwind CSS**: For efficient styling framework
- **Vite**: For fast development experience

## 📞 Support

If you encounter any issues or have questions:

1. **GitHub Issues**: [Create an issue](https://github.com/AnmolSharma1711/Azure/issues)
2. **Email**: [Your email if you want to provide it]
3. **Documentation**: Check this README for common questions

---

**Happy Learning! 🎓**

*Prepare for your Azure certification with confidence using this comprehensive quiz application.*
