export class DateUtils {
  static addDays(date: Date, days: number): Date {
    const timeToAdd = 86_400_000 * days;
    return new Date(date.getTime() + timeToAdd);
  }

  static parseDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  static parseDateStr = (date: string) => date.split("T")[0];
}
