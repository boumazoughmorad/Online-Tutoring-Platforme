
export interface CategoryDescription {
  id: number;
  description: string;
}

export interface CategoryService {
  id: number;
  name: string;
  nombreProf: string;
  icon: string;
  description: string;
}

export interface Category {
  id: number;
  icon:string;
  categorieName: string;
  descriptions: CategoryDescription[];
  service: CategoryService[];
}
