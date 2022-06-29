
export interface ProfileProps {
  name: string;
  avatarUrl: string;
  profileUrl:string;
  location: string;
  bio: string;
}


export interface SearchFormProps {
   onSearchFormSubmit:(e: React.FormEvent<HTMLFormElement>) => void;
  query:string,
  onSearchInputChange: (e: React.FormEvent<HTMLInputElement>)=> void ,
}