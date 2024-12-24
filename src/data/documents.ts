import { Document } from '../types/document';

export const documents: Document[] = [
  {
    id: '1',
    title: 'Project Proposal',
    owner: 'me',
    lastModified: 'Dec 18, 2023',
    shared: true,
    lastOpened: 'Dec 20, 2023',
    followUpCount: 2
  },
  {
    id: '2',
    title: 'Meeting Notes',
    owner: 'me',
    lastModified: 'Dec 15, 2023',
    lastOpened: 'Dec 19, 2023',
    followUpCount: 0
  },
  {
    id: '3',
    title: 'Budget Planning',
    owner: 'John Doe',
    lastModified: 'Dec 10, 2023',
    shared: true,
    lastOpened: 'Dec 16, 2023',
    followUpCount: 3
  }
];