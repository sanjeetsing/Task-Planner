export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: number;
    status: 'completed' | 'in-progress';
  }
  