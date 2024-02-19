// and create and interface called lAccount with this 2 methods (addCustomer, removeCustomer)

export interface lAccount {
  addCustomer(customer: string): void;
  removeCustomer(customer: string): void;
}