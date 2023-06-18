export default class HttpException extends Error {
  public status: number;
  public message: string;
  constructor(status = 500, message = 'Internarl server errror') {
    super();
    this.status = status;
    this.message = message;
  }
}
