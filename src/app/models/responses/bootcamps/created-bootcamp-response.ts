export interface CreatedBootcampResponse {
    id: number;
    name: string;
    instructorId: string; // Guid olarak tanımlanabilir, ancak JavaScript'te Guid veri tipi doğrudan desteklenmez
    startDate: Date;
    endDate: Date;
    bootcampStateId: number;
  }