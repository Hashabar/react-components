export class TableColumn {
    name: string;
    className: string;
  
    constructor(name: string, className?: string) {
      this.name = name;
      this.className = className ?? "";
    }
  }