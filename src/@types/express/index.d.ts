// This is how to declare custom types for a library

declare namespace Express {

  //disable line
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
    };
  }
}