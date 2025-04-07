export interface Tutor {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  specialization: string;
  language: string;
  students: number;
  bio: string;
  price: number;
  introduce_linkyoutube: string;
}

export interface Specialty {
  uuid: string;
  name: string;
}

export interface Availability {
  uuid: string;
  value: string;
}

export interface Price {
  uuid: string;
  service: string;
  amount: number;

}

export interface SortOption {
  uuid: string;
  sortMethode: string;
}
