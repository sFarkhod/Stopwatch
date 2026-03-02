// !here this enum creates a runtime js code which cannot be erased by typescript so that's why we just use the type for now
// @ts-nocheck
export enum Status {
  Idle = "idle",
  Running = "running",
  Paused = "paused",
}
