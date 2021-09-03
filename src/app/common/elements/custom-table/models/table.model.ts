export enum SortOrder {
  asc = 1,
  des = -1
}

export interface Sort {
  sortField: string;
  sortOrder: SortOrder;
}
