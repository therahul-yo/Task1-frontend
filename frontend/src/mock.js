// Mock data for Project Management Dashboard

export const mockProjects = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern UI/UX',
    status: 'in-progress',
    progress: 65,
    startDate: '2025-01-15',
    endDate: '2025-03-30',
    teamMembers: ['1', '2', '3'],
    priority: 'high',
    budget: 50000,
    spent: 32500
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native iOS and Android app for customer engagement',
    status: 'planning',
    progress: 15,
    startDate: '2025-02-01',
    endDate: '2025-06-15',
    teamMembers: ['2', '4', '5'],
    priority: 'high',
    budget: 120000,
    spent: 18000
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Third-party payment gateway integration',
    status: 'completed',
    progress: 100,
    startDate: '2024-12-01',
    endDate: '2025-01-20',
    teamMembers: ['3', '6'],
    priority: 'medium',
    budget: 25000,
    spent: 24000
  },
  {
    id: '4',
    name: 'Cloud Migration',
    description: 'Migrate infrastructure to AWS cloud services',
    status: 'in-progress',
    progress: 40,
    startDate: '2025-01-10',
    endDate: '2025-04-30',
    teamMembers: ['1', '4', '6'],
    priority: 'high',
    budget: 80000,
    spent: 28000
  },
  {
    id: '5',
    name: 'Marketing Campaign',
    description: 'Q1 digital marketing and social media campaign',
    status: 'on-hold',
    progress: 25,
    startDate: '2025-02-15',
    endDate: '2025-03-31',
    teamMembers: ['5'],
    priority: 'low',
    budget: 15000,
    spent: 3750
  }
];

export const mockTasks = [
  {
    id: '1',
    projectId: '1',
    title: 'Design homepage mockup',
    description: 'Create high-fidelity mockups for new homepage',
    status: 'completed',
    assignedTo: '2',
    priority: 'high',
    dueDate: '2025-02-10',
    createdAt: '2025-01-15'
  },
  {
    id: '2',
    projectId: '1',
    title: 'Implement responsive navigation',
    description: 'Build mobile-first navigation component',
    status: 'in-progress',
    assignedTo: '1',
    priority: 'high',
    dueDate: '2025-02-20',
    createdAt: '2025-01-20'
  },
  {
    id: '3',
    projectId: '1',
    title: 'Optimize image assets',
    description: 'Compress and optimize all images for web',
    status: 'todo',
    assignedTo: '3',
    priority: 'medium',
    dueDate: '2025-02-25',
    createdAt: '2025-01-22'
  },
  {
    id: '4',
    projectId: '2',
    title: 'Setup React Native project',
    description: 'Initialize project with required dependencies',
    status: 'completed',
    assignedTo: '4',
    priority: 'high',
    dueDate: '2025-02-05',
    createdAt: '2025-02-01'
  },
  {
    id: '5',
    projectId: '2',
    title: 'Design app wireframes',
    description: 'Create wireframes for all app screens',
    status: 'in-progress',
    assignedTo: '2',
    priority: 'high',
    dueDate: '2025-02-15',
    createdAt: '2025-02-02'
  },
  {
    id: '6',
    projectId: '4',
    title: 'Setup AWS infrastructure',
    description: 'Configure VPC, EC2, and RDS instances',
    status: 'in-progress',
    assignedTo: '6',
    priority: 'high',
    dueDate: '2025-02-28',
    createdAt: '2025-01-10'
  },
  {
    id: '7',
    projectId: '4',
    title: 'Database migration script',
    description: 'Write scripts to migrate data to cloud',
    status: 'todo',
    assignedTo: '1',
    priority: 'medium',
    dueDate: '2025-03-10',
    createdAt: '2025-01-15'
  }
];

export const mockTeamMembers = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    role: 'Full Stack Developer',
    avatar: 'SC',
    status: 'active',
    tasksAssigned: 5,
    tasksCompleted: 12
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    email: 'michael.r@company.com',
    role: 'UI/UX Designer',
    avatar: 'MR',
    status: 'active',
    tasksAssigned: 3,
    tasksCompleted: 8
  },
  {
    id: '3',
    name: 'Emily Watson',
    email: 'emily.watson@company.com',
    role: 'Frontend Developer',
    avatar: 'EW',
    status: 'active',
    tasksAssigned: 4,
    tasksCompleted: 15
  },
  {
    id: '4',
    name: 'James Kim',
    email: 'james.kim@company.com',
    role: 'Mobile Developer',
    avatar: 'JK',
    status: 'active',
    tasksAssigned: 6,
    tasksCompleted: 10
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    email: 'olivia.m@company.com',
    role: 'Marketing Specialist',
    avatar: 'OM',
    status: 'away',
    tasksAssigned: 2,
    tasksCompleted: 5
  },
  {
    id: '6',
    name: 'David Thompson',
    email: 'david.t@company.com',
    role: 'DevOps Engineer',
    avatar: 'DT',
    status: 'active',
    tasksAssigned: 4,
    tasksCompleted: 9
  }
];

export const mockAnalytics = {
  totalProjects: 5,
  activeProjects: 2,
  completedProjects: 1,
  onHoldProjects: 1,
  totalTasks: 47,
  completedTasks: 28,
  inProgressTasks: 12,
  todoTasks: 7,
  teamMembers: 6,
  totalBudget: 290000,
  totalSpent: 106250,
  weeklyProgress: [
    { week: 'Week 1', completed: 5, inProgress: 8 },
    { week: 'Week 2', completed: 7, inProgress: 9 },
    { week: 'Week 3', completed: 6, inProgress: 7 },
    { week: 'Week 4', completed: 10, inProgress: 12 }
  ]
};

// Mock API functions
export const mockApi = {
  // Projects
  getProjects: () => Promise.resolve(mockProjects),
  getProjectById: (id) => Promise.resolve(mockProjects.find(p => p.id === id)),
  createProject: (project) => Promise.resolve({ ...project, id: Date.now().toString() }),
  updateProject: (id, updates) => Promise.resolve({ ...mockProjects.find(p => p.id === id), ...updates }),
  deleteProject: (id) => Promise.resolve({ success: true }),
  
  // Tasks
  getTasks: () => Promise.resolve(mockTasks),
  getTasksByProject: (projectId) => Promise.resolve(mockTasks.filter(t => t.projectId === projectId)),
  createTask: (task) => Promise.resolve({ ...task, id: Date.now().toString() }),
  updateTask: (id, updates) => Promise.resolve({ ...mockTasks.find(t => t.id === id), ...updates }),
  deleteTask: (id) => Promise.resolve({ success: true }),
  
  // Team
  getTeamMembers: () => Promise.resolve(mockTeamMembers),
  getTeamMemberById: (id) => Promise.resolve(mockTeamMembers.find(m => m.id === id)),
  
  // Analytics
  getAnalytics: () => Promise.resolve(mockAnalytics)
};
