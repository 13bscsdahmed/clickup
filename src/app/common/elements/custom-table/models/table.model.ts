export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export interface Sort {
  sortField: string;
  sortOrder: SortOrder;
}
