export type ScheduleType = {
  classroom: string[];
  end: string;
  start: string;
  name: string;
  professor: string[];
  weekday: 'monday';
  weeks: number[];
  id: string;
};

export interface YapbScheduleType extends ScheduleType {
  secondLanguage: string;
}
