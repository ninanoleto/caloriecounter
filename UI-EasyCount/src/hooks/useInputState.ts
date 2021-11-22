import React, { useState } from "react";

export function useInputState(
  initialValue: string
): [string, (evt: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValue(evt.currentTarget.value);

  const reset = () => setInputValue("");

  return [inputValue, handleChange, reset];
}

export function useManyInputState(
  initialValues: Record<string, string>
): [
  Record<string, string>,
  (evt: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] {
  const [inputValues, setInputValues] = useState(initialValues);

  const handleChanges = (evt: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValues({
      ...inputValues,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });

  const resetAll = () => setInputValues(initialValues);

  return [inputValues, handleChanges, resetAll];
}
