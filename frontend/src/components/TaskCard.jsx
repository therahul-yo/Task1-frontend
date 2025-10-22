import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Calendar, Flag } from 'lucide-react';
import { mockTeamMembers } from '../mock';

const TaskCard = ({ task, draggable = false }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const assignedMember = mockTeamMembers.find(m => m.id === task.assignedTo);

  return (
    <Card className="p-4 hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 bg-white">
      <div className="space-y-3">
        {/* Title */}
        <h4 className="font-medium text-gray-900">{task.title}</h4>
        
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{task.description}</p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {assignedMember && (
              <Avatar className="w-6 h-6">
                <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  {assignedMember.avatar}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
          <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
