export interface WorkItem {
  id: string;
  title: string;
  distance: number;
  friction: number;
  relativity: number;
}

export interface EstimationSession {
  id: string;
  items: WorkItem[];
  shareableLink: string;
}