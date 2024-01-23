//schema.ts
interface taskSchema {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  status: "pending" | "in-progress" | "complete";
}

export default taskSchema;
