export default interface Todos {
  id: Number;
  name: string;
  description: string;
  done: number;
  user_id: number | null;
}