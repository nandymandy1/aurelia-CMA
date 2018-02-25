import { Customer } from './customer';

export class App {
  constructor() {
    this.heading = 'Customer Manager';
    this.customers = this.getCustomersFromLS();

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  // Getting the customerlist from the localStorage
  getCustomersFromLS(){
    let customers;
    if(localStorage.getItem('customers') === null){
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }
    return customers;
  }
  // Add Customer
  addCustomer(){
    if(this.customerName && this.customerEmail && this.customerPhone){
      this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));

      // Storing the customer in the loacal storage
      this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);

      //Clear fields
      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
    }
  }

  // Storing the customer into the localstorage
  storeCustomer(name, email, phone) {
    let customers;
    if(localStorage.getItem('customers') === 'null'){
      // If there is no customers in the local storage
      customers = [];

    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }
    customers.push({name: name, email: email, phone: phone});
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  // Remove Customer
  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if(index != -1){
      this.customers.splice(index, 1);
    }
    this.removeFromLS(index);
  }

  // remove customer from localStorage
  removeFromLS(index){
    let customers = JSON.parse(localStorage.getItem('customers'));
    customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(customers));
  }


}
