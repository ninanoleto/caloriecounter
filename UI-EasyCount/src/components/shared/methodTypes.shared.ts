export type Save = (inputValue: string) => void;

export type Update = (id: number, inputValue: string) => void;

export type Delete = (id: number) => void;

export type SaveMany<T> = (inputValues: T[]) => void;

export type SaveObj<T> = (newObject: T) => void;

export type UpdateObj<T> = (id: number, newObject: T) => void;
