import React, { useEffect, useState } from 'react';
import { TrendingUp, Activity, CheckCircle2, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import StatCard from '../components/StatCard';
import { mockApi } from '../mock';
import { toast } from '../hooks/use-toast';

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await mockApi.getAnalytics();
      setAnalytics(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load analytics',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600">Loading analytics...</div>
      </div>
    );
  }

  if (!analytics) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your team's performance and progress</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Tasks"
          value={analytics.totalTasks}
          icon={Activity}
          color="blue"
        />
        <StatCard
          title="Completed"
          value={analytics.completedTasks}
          icon={CheckCircle2}
          trend="up"
          trendValue="15%"
          color="green"
        />
        <StatCard
          title="In Progress"
          value={analytics.inProgressTasks}
          icon={Clock}
          color="orange"
        />
        <StatCard
          title="Completion Rate"
          value={`${Math.round((analytics.completedTasks / analytics.totalTasks) * 100)}%`}
          icon={TrendingUp}
          trend="up"
          trendValue="8%"
          color="purple"
        />
      </div>

      {/* Weekly Progress Chart */}
      <Card className="p-6 border border-gray-200 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Progress</h3>
        <div className="space-y-4">
          {analytics.weeklyProgress.map((week, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{week.week}</span>
                <span className="text-sm text-gray-600">
                  {week.completed + week.inProgress} tasks
                </span>
              </div>
              <div className="flex gap-1 h-8">
                <div
                  className="bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium transition-all duration-500"
                  style={{ width: `${(week.completed / (week.completed + week.inProgress)) * 100}%` }}
                >
                  {week.completed > 0 && week.completed}
                </div>
                <div
                  className="bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium transition-all duration-500"
                  style={{ width: `${(week.inProgress / (week.completed + week.inProgress)) * 100}%` }}
                >
                  {week.inProgress > 0 && week.inProgress}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
        </div>
      </Card>

      {/* Project Status Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border border-gray-200 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Active Projects</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{analytics.activeProjects}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Completed Projects</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{analytics.completedProjects}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-700">On Hold</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{analytics.onHoldProjects}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-gray-200 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget Utilization</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {Math.round((analytics.totalSpent / analytics.totalBudget) * 100)}%
              </div>
              <p className="text-sm text-gray-600">Budget Used</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(analytics.totalSpent / analytics.totalBudget) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Spent: ${(analytics.totalSpent / 1000).toFixed(0)}K</span>
              <span className="text-gray-600">Total: ${(analytics.totalBudget / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
