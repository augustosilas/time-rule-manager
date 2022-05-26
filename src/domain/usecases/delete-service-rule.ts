export interface DeleteServiceRule {
  delete: (id: string) => Promise<void>
}