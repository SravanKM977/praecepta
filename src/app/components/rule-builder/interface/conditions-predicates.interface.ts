export interface ConditionPredicate {
  attribute: string;
  operator: string;
  value: string;
}

export interface ConditionSet {
  conditionsPredicates: [];
  successActions: [];
  failureActions: [];
}
