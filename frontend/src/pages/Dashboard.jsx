import React, { useEffect, useState } from 'react';
import { LayoutDashboard, FolderKanban, Users, BarChart3, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import StatCard from '../components/StatCard';
import ProjectCard from '../components/ProjectCard';
import { mockApi } from '../mock';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [projectsData, analyticsData] = await Promise.all([
        mockApi.getProjects(),
        mockApi.getAnalytics()
      ]);
      setProjects(projectsData);
      setAnalytics(analyticsData);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <Button 
          onClick={() => navigate('/projects/new')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats Grid */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value={analytics.totalProjects}
            icon={FolderKanban}
            trend="up"
            trendValue="12%"
            color="blue"
          />
          <StatCard
            title="Active Tasks"
            value={analytics.inProgressTasks}
            icon={LayoutDashboard}
            trend="up"
            trendValue="8%"
            color="green"
          />
          <StatCard
            title="Team Members"
            value={analytics.teamMembers}
            icon={Users}
            color="purple"
          />
          <StatCard
            title="Completion Rate"
            value={`${Math.round((analytics.completedTasks / analytics.totalTasks) * 100)}%`}
            icon={BarChart3}
            trend="up"
            trendValue="5%"
            color="orange"
          />
        </div>
      )}

      {/* Active Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(p => p.status === 'in-progress')
            .slice(0, 3)
            .map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            ))}
        </div>
      </div>

      {/* Budget Overview */}
      {analytics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Total Budget</span>
                  <span className="font-semibold text-gray-900">${(analytics.totalBudget / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Spent</span>
                  <span className="font-semibold text-gray-900">${(analytics.totalSpent / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining</span>
                  <span className="font-semibold text-green-600">${((analytics.totalBudget - analytics.totalSpent) / 1000).toFixed(0)}K</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(analytics.totalSpent / analytics.totalBudget) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Distribution</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="text-sm font-semibold text-green-600">{analytics.completedTasks} tasks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">In Progress</span>
                <span className="text-sm font-semibold text-blue-600">{analytics.inProgressTasks} tasks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">To Do</span>
                <span className="text-sm font-semibold text-gray-600">{analytics.todoTasks} tasks</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
