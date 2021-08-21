// querySelector
let form = document.querySelector("#book-form")
let booklist = document.querySelector("#book-list")


// Book Class
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}



// UI Class
class UI{
    

   static addToBookList(book){
    console.log(book);
    let list = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`
     //console.log(row);
    list.appendChild(row);
    
    }
   static clearFields(){
        document.querySelector("#title").value ="";
        document.querySelector("#author").value ="";
        document.querySelector("#isbn").value ="";

    }
   static showAlert(message,className){
       let div = document.createElement('div');
       div.className = `alert ${className}`;
       div.appendChild(document.createTextNode(message));
       let container = document.querySelector(".container");
       let form = document.querySelector("#book-form");
       container.insertBefore(div,form);

       setTimeout(()=>{
           document.querySelector(".alert").remove();
       },1000);

   }
    static deleteFromBook(target){
    if(target.hasAttribute("href")){
      target.parentElement.parentElement.remove()
    }
 }
}




//  Add Event Listener 
form.addEventListener("submit",newBook);
booklist.addEventListener("click",removeBook);





//Define function
function newBook(e){

    let title = document.querySelector("#title").value;
    author = document.querySelector("#author").value;
    isbn = document.querySelector("#isbn").value;

    let ui = new UI();

    if (title === '' || author === '' || isbn === ''){

      UI.showAlert("Please fill in the fields!","error");

    } else {

    let book=new Book(title,author,isbn);

    UI.addToBookList(book);

    UI.clearFields();

    UI.showAlert("Book Added!","success");
    
    }
  
    e.preventDefault();

}

function removeBook(e){

    UI.deleteFromBook(e.target);
    UI.showAlert("Book Removed!","success");

}