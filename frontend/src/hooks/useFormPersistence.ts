import { useCallback } from "react";

export const useFormPersistence = () => {
  const key = "signupFormData";

  const saveForm = useCallback((data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const loadForm = useCallback(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  }, []);

  return { saveForm, loadForm };
};
