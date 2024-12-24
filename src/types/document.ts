export interface Document {
  id: string;
  title: string;
  owner: string;
  lastModified: string;
  shared?: boolean;
  lastOpened?: string;
  followUpCount: number;
}