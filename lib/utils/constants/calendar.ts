export const MONTHS = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
} as const

export const CHRISTMAS_PERIOD = {
  START_DAY: 23,
  END_DAY: 29,
} as const

export const WINTER_MONTHS: number[] = [MONTHS.DECEMBER, MONTHS.JANUARY, MONTHS.FEBRUARY]
