export type PageTab = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'admissions' 
  | 'parent-portal' 
  | 'student-portal' 
  | 'gallery' 
  | 'events' 
  | 'teachers' 
  | 'contact';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Academics' | 'Sports' | 'Admissions' | 'Fieldwork' | 'Events';
  summary: string;
  content: string;
  badge?: string;
}

export interface StudentResource {
  id: string;
  title: string;
  level: 'O-Level (S.1-S.4)' | 'A-Level (S.5-S.6)' | 'General';
  subject: string;
  term: 'Term 1' | 'Term 2' | 'Term 3';
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  fileSize: string;
  downloadsCount: number;
  description: string;
  downloadUrl?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Examination' | 'Fieldwork';
  location: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sports & Trophies' | 'Academic Milestones' | 'Fieldwork & Trips' | 'Entertainment & MDD' | 'Campus Life';
  imageUrl: string;
  caption: string;
  year: string;
}

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  department: string;
  subjects: string[];
  qualifications: string;
  phone: string;
  email: string;
  avatarUrl?: string;
  officeHours: string;
}

export interface StudentReport {
  studentId: string;
  studentName: string;
  classLevel: string;
  stream: string;
  term: string;
  academicYear: string;
  attendanceRate: number; // percentage
  daysPresent: number;
  totalDays: number;
  conductRating: 'Excellent' | 'Very Good' | 'Good' | 'Needs Improvement';
  classTeacherRemarks: string;
  headteacherRemarks: string;
  feesStatus: {
    totalFees: number;
    amountPaid: number;
    balance: number;
    status: 'Cleared' | 'Partial' | 'Pending';
  };
  grades: {
    subject: string;
    botScore: number;
    motScore: number;
    eotScore: number;
    total: number;
    grade: string;
    points?: number;
    remarks: string;
  }[];
}
