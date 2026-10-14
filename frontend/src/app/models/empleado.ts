export class Empleado {
  _id: string;
  name: string;
  position: string;
  office: string;
  salary: number | null;

  constructor(
    _id = '',
    name = '',
    position = '',
    office = '',
    salary: number | null = null
  ) {
    this._id = _id;
    this.name = name;
    this.position = position;
    this.office = office;
    this.salary = salary;
  }
}