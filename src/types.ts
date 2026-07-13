export interface KashtItem {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: 'active' | 'surrendered' | 'resolved';
  surrenderedAt: string | null;
  resolvedAt: string | null;
  gratitudeNote: string | null;
}

export interface JapaSession {
  id: string;
  date: string; // YYYY-MM-DD
  count: number;
}

export interface JapaLog {
  totalChants: number;
  sessions: JapaSession[];
}

export interface Sankalpa {
  id: string;
  title: string;
  description: string;
  type: 'japa' | 'chalisa';
  targetPerDay: number; // e.g. 108 chants or 11 recitations
  targetDays: number; // e.g. 21, 40, 108 days
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  logs: { [date: string]: number }; // Maps date (YYYY-MM-DD) to count achieved
  status: 'active' | 'completed' | 'abandoned';
}

export interface AppState {
  kashts: KashtItem[];
  japa: JapaLog;
  sankalpas: Sankalpa[];
  chalisaLogs: { [date: string]: number }; // Maps YYYY-MM-DD to count of Chalisa recitations
}
