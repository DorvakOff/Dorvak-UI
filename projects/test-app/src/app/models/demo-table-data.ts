export interface DemoTableData {
  name: string;
  age: number;
  address: string;
  status: 'active' | 'inactive' | 'need-verification';
  createdAt: Date;
}
