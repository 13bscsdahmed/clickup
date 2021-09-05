import { SortOrder } from '@common/elements/custom-table/models';

export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
}

export interface SelectedOptions {
  page?: number;
  limit?: number;
  q?: string;
  order?: SortOrder | null;
  sort?: string | null;
}
