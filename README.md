# OtakuVerse - React Learning Project

A modern anime discovery platform built with React, designed to help developers learn React fundamentals and modern web development practices.

Users can now click on an anime to view a dedicated preview page with more details and a trailer.

## 🎯 Project Focus

This project is primarily focused on **implementing and learning React** concepts including:
- React Hooks (useState, useEffect, useDebounce)
- Component-based architecture
- State management
- API integration
- Modern React patterns and best practices

## 🎨 Design & Inspiration

All designs, UI components, and project structure are based on the excellent tutorial by **JS Mastery**:
- **Tutorial URL**: [https://youtu.be/dCLhUialKPQ](https://youtu.be/dCLhUialKPQ)
- **Credit**: This project follows the design and implementation approach from the JS Mastery React tutorial

## ✨ Features

- **Anime Search**: Search for anime titles with debounced search functionality
- **Popular Anime Display**: Browse popular anime from the Jikan API
- **Trending Section**: View trending anime based on search analytics
- **Anime Preview Page**: Click on an anime to view a dedicated page with detailed information, ratings, and a trailer (if available)
- **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS
- **Real-time Search**: Instant search results with loading states
- **Search Analytics**: Track popular searches using Appwrite backend

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Backend**: Appwrite (Database & Analytics)
- **API**: Jikan API (MyAnimeList data)
- **Utilities**: react-use
- **Icons**: FontAwesome (for UI icons in preview page)
- **Development**: ESLint, Hot Module Replacement

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd StreamingPlatformReact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with your Appwrite credentials:
   ```env
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_ENDPOINT=your_endpoint
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimeCard.jsx      # Individual anime display component
│   ├── Search.jsx         # Search input component
│   ├── spinner.jsx        # Loading spinner component
│   ├── HomeButton.jsx     # Button to return to home page
│   ├── AnimeDetails.jsx   # Detailed anime info section
│   └── ScrollToTop.jsx    # Scroll restoration component
├── pages/
│   └── AnimePreview.jsx   # Detailed anime preview page
├── App.jsx                # Main application component
├── appwrite.js            # Appwrite backend integration
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## 🎓 Learning Objectives

This project demonstrates:
- **React Hooks**: useState, useEffect, custom hooks
- **Component Architecture**: Reusable, modular components
- **API Integration**: Fetching data from external APIs
- **State Management**: Managing application state
- **Debouncing**: Optimizing search performance
- **Error Handling**: Graceful error states
- **Loading States**: User experience improvements
- **Modern CSS**: Tailwind CSS implementation

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Add new features
- Improve documentation

## 📝 License

This project is for educational purposes. The design and structure are based on the JS Mastery tutorial mentioned above.

## 🙏 Acknowledgments

- **JS Mastery** for the excellent React tutorial and design inspiration
- **Jikan API** for providing anime data
- **Appwrite** for the backend services
- **React Team** for the amazing framework

---

**Note**: This project is created for learning React development. All designs and implementation patterns are credited to the JS Mastery tutorial referenced above.
