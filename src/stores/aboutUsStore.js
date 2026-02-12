import { makeAutoObservable } from "mobx";

export class AboutUsStore {
  data = null;
  status = "idle"; // idle | success | error
  error = null;

  constructor(initialData) {
    makeAutoObservable(this, {}, { autoBind: true });
    if (initialData) this.hydrate(initialData);
  }

  hydrate(initialData) {
    this.data = initialData || null;
    this.status = initialData ? "success" : "idle";
    this.error = null;
  }

  setError(error) {
    this.status = "error";
    this.error = error instanceof Error ? error.message : String(error || "Error");
  }
}

export function createAboutUsStore(initialData) {
  return new AboutUsStore(initialData);
}

