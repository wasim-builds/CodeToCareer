# Quiz App - Technical Skills Interview Preparation

A comprehensive technical skills quiz application for interview preparation, built with Next.js, TypeScript, and Tailwind CSS. Test your knowledge across 35+ technical topics with 150 questions per topic.

## Features

- 📚 **35+ Technical Topics**: Covering Languages, Full Stack, Data & AI, Tools & Cloud, and Core Concepts
- 🎯 **150 Questions Per Topic**: 50 easy, 50 medium, and 50 hard questions for each topic
- 📊 **Difficulty Levels**: Filter questions by Easy, Medium, Hard, or take all questions
- ⏱️ **Timer & Progress**: Track your time and progress during quizzes
- 📈 **Score Tracking**: Save and view your quiz results and history
- 🏆 **Progress Dashboard**: View statistics including quizzes completed and average scores
- 💾 **Local Storage**: Quiz results are saved locally in your browser
- 🎨 **Dark Mode**: Beautiful UI with dark/light theme support
- 📱 **Responsive Design**: Works seamlessly on all devices

## Topics Covered

### Languages
- Python, Java, C++, JavaScript (ES6+), SQL, NoSQL, HTML5/CSS3, Bash/Shell

### Full Stack
- React.js, Node.js, Express.js, Flask, REST API, MongoDB, JWT Auth

### Data & AI
- TensorFlow, Scikit-learn, Pandas, NumPy, PowerBI, Data Visualization, EDA, NLP

### Tools & Cloud
- Linux (Ubuntu/Fedora), Git, GitHub, AWS, Docker, Jupyter Notebooks

### Core Concepts
- System Design, Data Structures & Algorithms (DSA), OOP, DBMS, SDLC

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **State Management**: React Context API
- **Storage**: LocalStorage for quiz results persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

4. Navigate to the Quiz Dashboard:
   - Main Dashboard: [http://localhost:3001/quiz](http://localhost:3001/quiz)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Quiz App/
├── app/                    # Next.js app directory
│   ├── quiz/              # Quiz pages
│   │   ├── page.tsx      # Main quiz dashboard
│   │   └── [topicId]/    # Dynamic topic routes
│   │       ├── page.tsx  # Topic detail & difficulty selection
│   │       ├── take/     # Quiz taking interface
│   │       └── results/  # Quiz results & history
│   └── ...
├── components/            # React components
│   ├── quiz/             # Quiz-specific components
│   │   ├── QuizDashboard.tsx
│   │   ├── QuizComponent.tsx
│   │   └── TopicCard.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── contexts/              # React Context providers
│   ├── QuizContext.tsx   # Quiz state management
│   ├── CartContext.tsx
│   ├── ThemeContext.tsx
│   └── WishlistContext.tsx
├── data/                  # Data files
│   ├── quiz/             # Quiz data
│   │   ├── topics.ts     # Topic definitions
│   │   ├── questions.ts # Question loading
│   │   └── questionGenerator.ts # Question generation
│   └── products.ts
├── types/                 # TypeScript type definitions
│   ├── quiz.ts           # Quiz-related types
│   └── index.ts
└── public/                # Static assets
```

## Features in Detail

### Quiz Dashboard
- View all 35+ topics organized by category
- See question counts for each difficulty level
- Track your progress with statistics
- Quick access to any topic

### Quiz Taking
- Select difficulty level (Easy, Medium, Hard, or All)
- Progress bar showing completion status
- Timer to track time spent
- Navigate between questions (Previous/Next)
- Real-time answer selection

### Results & History
- View detailed quiz results
- See correct/incorrect answers
- Track time spent on each quiz
- View quiz history for each topic
- Calculate average scores

### Question System
- 150 questions per topic (50 per difficulty level)
- Topic-specific question generation
- Multiple choice format
- Explanations for each question

## Customization

### Adding Questions
Edit `data/quiz/questionGenerator.ts` to add more realistic questions for specific topics.

### Adding Topics
Add new topics to `data/quiz/topics.ts` following the existing structure.

### Styling
Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

## Usage

1. **Start a Quiz**:
   - Go to the Quiz Dashboard
   - Click on any topic card
   - Select a difficulty level
   - Start answering questions

2. **Track Progress**:
   - View your statistics on the dashboard
   - Check results after completing a quiz
   - Review your quiz history

3. **Improve Skills**:
   - Practice with easy questions first
   - Progress to medium and hard levels
   - Review your results to identify weak areas

## Future Enhancements

- User authentication and profiles
- Leaderboards and rankings
- More detailed explanations
- Question review mode
- Export results to PDF
- Practice mode vs. timed mode
- Question bookmarking
- Study notes integration
- Mobile app version
- Offline support

## License

This project is open source and available under the MIT License.
