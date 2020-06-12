//1
class Author {
    constructor(name,email,gender){
      this.name = name;
      this.email = email;
      this.gender = gender;
    }
     get _name (){
       return this.name
     }
     set _name(v){
      return this.name = v;
     }
     get _email (){
       return this.email
     }
     set _email(v){
      return this.email = v;
     }
     get _gender (){
         return this.gender;
     }
     set _gender(v){
      return this.gender = v;
     }
     
  };
  
  class Book {
   constructor(title,author,price,quantity){
     this.title = title
     this.price = price;
     this._author = author;
     this.quantity =quantity; 
   }
    set _author(v){
      if( v instanceof Author){
        this.author = v
      }else{
        throw new Error ('ivalid author')
      }
    }
    get _author(){
      return this.author
    }
    set _price (v){
        if(this.price > 1000){
      return this.price = v;
        }
    }
    get _price(){
       return this.price
     }
    set _quantity (v){
      return this.quantity = v;
    }
    get _quantity(){
       return this.quantity
     }
     set _title (v){
      return this.title = v;
    }
    get _title(){
       return this.title
     }
    
    getProfit(){
      return this.quantity * this.price
    }
    
  }
  
  let valod = new Author ("Valod","Mail","Male")
  let book = new Book('girq',valod,5000,10)
  
  
  //2

  class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst instanceof Account && accountSecond instanceof Account) {
            if (accountFirst.id === accountSecond.id) {
                return "They are the same Account"
            } else return "They are different Accounts"
        }
    }
    get _name() {
        return this.name
    }
    set _name(v) {
        this.name = v
    }
    get _balance() {
        return this.balance
    }
    set _balance(v) {
        this.balance = v
    }
    get _id() {
        return this.id
    }

    credit(amount) {
        this.balance += amount
        return this.balance
    }
    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount
            return this.balance
        } else return "Amount is more than balance."
    }
    transferTo(anotherAccount, amount) {
       if(anotherAccount instanceof Account){
        if (amount < this.balance) {
            this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        } else return "Amount is more than balance."
    }
    }
        toString() {
        return `The balance is ${this.balance}`
    }
}

let firstAcc = new Account(100,'Firs', 15000)
let SecondAcc = new Account(101, 'Sec', 25000)

