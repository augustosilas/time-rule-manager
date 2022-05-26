export interface DeleteServiceRuleRepository {
  delete: (id: string) => Promise<void>
}