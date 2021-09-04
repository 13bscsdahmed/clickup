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
  search?: string;
}

export interface UserStateModel {
  users: UserModel[];
  loading: boolean;
  selectedOptions: SelectedOptions;
}
