export interface Member {
  name: string;
  slug: string;
}

export interface House {
  slug: string;
  name: string;
  members: Member[];
}
