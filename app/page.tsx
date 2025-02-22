'use client';

import TaskList from '@/components/tasks/TaskList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TaskList />
    </div>
  );
}