export type ScheduleType = {
  name: string;
  professor: string[];
  classroom: number[];
  classStart: string;
  classEnd: string;
  secondLanguage?: string;
  weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  weeks: number[];
};
