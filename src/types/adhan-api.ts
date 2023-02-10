export interface Weather {
  timings: Timings;
  date: Date;
  meta: Meta;
}
export interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}
export interface Date {
  readable: string;
  timestamp: string;
  gregorian: Gregorian;
  hijri: Hijri;
}
export interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
}
export interface Weekday {
  en: string;
}
export interface Month {
  number: number;
  en: string;
}
export interface Designation {
  abbreviated: string;
  expanded: string;
}
export interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: Weekday1;
  month: Month1;
  year: string;
  designation: Designation;
  holidays?: string[] | null;
}
export interface Weekday1 {
  en: string;
  ar: string;
}
export interface Month1 {
  number: number;
  en: string;
  ar: string;
}
export interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Offset;
}
export interface Method {
  id: number;
  name: string;
  params: Params;
}
export interface Params {
  Fajr: number;
  Isha: number;
}
export interface Offset {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Asr: number;
  Maghrib: number;
  Sunset: number;
  Isha: number;
  Midnight: number;
}

export interface AdhanAPIResponse {
  data: {
    timings: Timings;
    date: Date;
    meta: Meta;
  };
}
