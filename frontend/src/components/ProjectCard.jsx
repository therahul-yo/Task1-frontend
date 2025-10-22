import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Calendar, DollarSign, Users } from 'lucide-react';
import { mockTeamMembers } from '../mock';

const ProjectCard = ({ project, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'planning': return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'on-hold': return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const teamMembersData = project.teamMembers
    .map(id => mockTeamMembers.find(m => m.id === id))
    .filter(Boolean);

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 bg-white"
      onClick={onClick}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
          </div>
          <Badge className={getPriorityColor(project.priority)}>
            {project.priority}
          </Badge>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-semibold text-gray-900">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        {/* Status Badge */}
        <div>
          <Badge className={getStatusColor(project.status)}>
            {project.status.replace('-', ' ')}
          </Badge>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>${(project.spent / 1000).toFixed(0)}k / ${(project.budget / 1000).toFixed(0)}k</span>
          </div>
        </div>

        {/* Team Members */}
        <div className="flex items-center gap-2 pt-2">
          <Users className="w-4 h-4 text-gray-600" />
          <div className="flex -space-x-2">
            {teamMembersData.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
            ))}
            {teamMembersData.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                +{teamMembersData.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
