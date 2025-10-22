# ProjectHub - Project Management Dashboard

A comprehensive, professional project management dashboard built with React for the Tachyon Systems Frontend Developer recruitment assignment (Task 2).

## 📋 Assignment Coverage

This project fulfills all requirements for **Task 2 - Application Walkthrough** covering all four offline exercise topics:

### ✅ Topic 1: Responsive React Dashboard
- Built a fully responsive React dashboard with reusable web components
- Integrated with mock REST API for data management
- Includes Dashboard, Projects, Tasks, Team, and Analytics views
- Mobile-first, responsive design using Tailwind CSS

### ✅ Topic 2: Reusable React Components
- Created custom reusable components with Shadow DOM patterns:
  - `ProjectCard` - Displays project information with progress tracking
  - `TaskCard` - Shows task details with status indicators
  - `StatCard` - Presents key metrics and statistics
  - `Sidebar` - Navigation component with active state highlighting
- All components follow React best practices and are highly reusable
- Custom styling with Tailwind CSS and shadcn/ui library

### ✅ Topic 3: Unit & Integration Tests
- Comprehensive test suite using Jest and React Testing Library
- Test files located in `src/components/__tests__/` and `src/pages/__tests__/`
- Tests cover:
  - Component rendering and props
  - User interactions and event handling
  - API integration and data loading
  - Navigation and routing

### ✅ Topic 4: E2E Testing with Playwright
- Automated end-to-end testing using Playwright
- Test files located in `e2e/` directory
- Covers:
  - Page navigation and routing
  - User workflows across all views
  - Interactive elements (buttons, filters, search)
  - Data display and state management

## 🎨 Design Philosophy

The dashboard follows **Apple-inspired design principles**:

- ✨ **Clean & Minimal**: Uncluttered interface with focus on content
- 🎯 **Whitespace**: 2-3x normal spacing for luxury feel
- 🎨 **Professional Colors**: Blue-gray palette (avoiding common purple gradients)
- ⚡ **Smooth Animations**: Subtle hover states and transitions
- 📱 **Responsive**: Mobile-first design that scales beautifully

## 🚀 Features

### Dashboard View
- Overview statistics (Total Projects, Active Tasks, Team Members, Completion Rate)
- Active projects display with progress tracking
- Budget overview with visual progress bars
- Task distribution breakdown

### Projects Page
- All projects in card layout
- Search functionality
- Filter by status (All, In Progress, Planning, Completed, On Hold)
- Priority badges and progress indicators
- Team member avatars

### Tasks Page
- Kanban board with three columns (To Do, In Progress, Completed)
- Drag-and-drop ready structure
- Task cards with assignee and due date
- Priority flags

### Team Page
- Team member cards with avatars
- Role and status display
- Task statistics (assigned and completed)
- Email information

### Analytics Page
- Key metrics overview
- Weekly progress visualization
- Project status distribution
- Budget utilization tracking

## 🛠️ Technology Stack

- **React 19** - Latest React with hooks
- **React Router 7** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon set (no emoji icons)
- **Axios** - HTTP client for API calls
- **Jest** - Unit and integration testing
- **React Testing Library** - Component testing utilities
- **Playwright** - End-to-end testing framework

## 📦 Installation & Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# The app will open at http://localhost:3000
```

## 🧪 Running Tests

### Unit & Integration Tests (Topic 3)
```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test --coverage
```

### E2E Tests (Topic 4)
```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npx playwright test

# Run E2E tests in UI mode
npx playwright test --ui

# Run specific test file
npx playwright test e2e/dashboard.spec.js

# Generate HTML report
npx playwright show-report
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── __tests__/               # Component tests (Topic 3)
│   │   ├── ProjectCard.jsx          # Reusable component (Topic 2)
│   │   ├── TaskCard.jsx             # Reusable component (Topic 2)
│   │   ├── StatCard.jsx             # Reusable component (Topic 2)
│   │   └── Sidebar.jsx              # Navigation component
│   ├── pages/
│   │   ├── __tests__/               # Page tests (Topic 3)
│   │   ├── Dashboard.jsx            # Main dashboard (Topic 1)
│   │   ├── Projects.jsx             # Projects view
│   │   ├── Tasks.jsx                # Kanban board
│   │   ├── Team.jsx                 # Team management
│   │   └── Analytics.jsx            # Analytics view
│   ├── hooks/
│   │   └── use-toast.js             # Toast notification hook
│   ├── mock.js                      # Mock data and API (Topic 1)
│   ├── App.js                       # Main app component
│   ├── App.css                      # Global styles
│   └── setupTests.js                # Test configuration
├── e2e/                             # E2E tests (Topic 4)
│   ├── dashboard.spec.js
│   ├── navigation.spec.js
│   ├── projects.spec.js
│   ├── tasks.spec.js
│   ├── team.spec.js
│   └── analytics.spec.js
├── playwright.config.js             # Playwright configuration
└── package.json
```

## 🔧 Mock Data Structure

All mock data is centralized in `src/mock.js` for easy backend integration:

- **Projects**: 5 sample projects with various statuses
- **Tasks**: 7 tasks distributed across projects
- **Team Members**: 6 team members with different roles
- **Analytics**: Aggregated statistics and weekly progress

## 🎯 Key Implementation Details

### Reusable Components (Topic 2)

**ProjectCard Component:**
- Accepts project data as props
- Displays progress bar, status badge, budget info
- Shows team member avatars
- Handles click events for navigation

**TaskCard Component:**
- Displays task title, description, due date
- Shows assignee avatar
- Priority flag with color coding
- Ready for drag-and-drop functionality

**StatCard Component:**
- Flexible metrics display
- Supports trend indicators (up/down)
- Color-coded icons
- Responsive design

### Testing Strategy (Topics 3 & 4)

**Unit Tests:**
- Component rendering tests
- Props validation
- Event handler testing
- Mock API integration

**Integration Tests:**
- Page-level data flow
- API call verification
- State management testing

**E2E Tests:**
- Complete user workflows
- Navigation testing
- Interactive element verification
- Cross-page functionality

## 🌐 API Integration Ready

The project uses a mock API (`mock.js`) that can be easily replaced with real backend endpoints:

```javascript
// Current: Mock API
import { mockApi } from './mock';
const data = await mockApi.getProjects();

// Future: Real API
const data = await axios.get(`${BACKEND_URL}/api/projects`);
```

## 📊 Design Decisions

1. **No AI/Assistant Emojis**: Using lucide-react icons exclusively for professional appearance
2. **Blue-Gray Palette**: Professional, easy on eyes, avoids common purple gradients
3. **Tailwind CSS**: Rapid development with consistent styling
4. **shadcn/ui**: Pre-built accessible components with customization
5. **Mock Data Separation**: Easy transition to real backend
6. **Component-Based**: Highly modular and maintainable code

## 🎬 Demo Highlights

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Transitions**: All interactive elements have hover states
- **Loading States**: Proper loading indicators for async operations
- **Error Handling**: Toast notifications for user feedback
- **Accessible**: Semantic HTML and ARIA labels where needed

## 📝 Code Quality

- ✅ Clean, readable code with consistent formatting
- ✅ Component reusability and DRY principles
- ✅ Proper prop types and validation
- ✅ Comprehensive test coverage
- ✅ Modern React patterns (hooks, functional components)
- ✅ Separation of concerns (components, pages, mock data)

## 🚀 Production Build

```bash
# Create optimized production build
yarn build

# The build folder will contain optimized static files
# Ready to deploy to any static hosting service
```

## 📧 Contact

**Candidate Name**: [Your Name]
**Role Applied For**: Frontend Developer
**Task**: Task 2 - Application Walkthrough
**Topics Covered**: 1, 2, 3, 4

---

## 🏆 Submission Checklist

- ✅ Topic 1: Responsive dashboard with mock REST API
- ✅ Topic 2: Reusable components with custom styling
- ✅ Topic 3: Unit and integration tests (Jest + RTL)
- ✅ Topic 4: E2E tests (Playwright)
- ✅ Clean, professional UI (Apple-inspired)
- ✅ Comprehensive documentation
- ✅ Ready for video walkthrough recording

This project demonstrates proficiency in modern React development, component architecture, testing methodologies, and professional UI/UX design.
