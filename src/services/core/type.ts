export interface Problem {
  status: number;
  description?: string;
  errors?: Record<string, string[]>;
}
