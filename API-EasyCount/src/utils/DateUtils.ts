export class DateUtils {
  static dateToStr = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  static strToDate(dateString: string) {
    return new Date(dateString);
  }
}
