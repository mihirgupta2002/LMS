
import imthemind from "./image_books/imthemind.jpg";
import author1 from "./image_author/author1.jpg"
export const BookRequest=[];
export  const BOOKINFO=[
    {
    "title":"I am the MIND",
    "quantity":2,
    "isbn":1,
    "image":"https://m.media-amazon.com/images/I/71SZSFMH3hL._AC_UF1000,1000_QL80_.jpg",
    "Status":"Not Issued",
    "description":"Description of the book I am the Mind . ",
    "authorName":"Meera Gupta",
    "authorId":1,
    "AuthorImage":"https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc=",
    "AuthorDescription":"AUTHOR OF I am the mind first"
    
    },
    {
        "title":"Percy Jackson",
        "quantity":1,
        "isbn":2,
        "image":"https://m.media-amazon.com/images/I/91Ca-K4vjOL._AC_UF1000,1000_QL80_.jpg",
        "Status":"Not Issued",
        "description":"Second book description",
        "authorName":"Mihir Gupta",
        "authorId":2,
        "AuthorImage":"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg",
        "AuthorDescription":"AUTHOR OF PERCY JACKSON second"
    }
   
];

export const AUTHORINFO=[{
    "name":"Meera Gupta",
    "BookName":["I AM THE MIND"],
    
    "image":"https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc=",
    "description":"AUTHOR OF I AM  THE MIND",
    "authorId":1

},
{
    "name":"Mihir Gupta",
    "BookName":["Percy jackson"],
    "image":"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg",
    "description":"AUTHOR OF percy jackson",
    "authorId":2

},
];
export const MemberINFO=[{
    name:"MIHIR GUPTA",
    BorrowedBook: [],
    quantity:1,
    password:"password",
    address:"Essel tower Ivory Court Gurugram",
    id:1,
    totalBookBorrowed: 0,
        booksBorrowed:[" "],
},
{
    name:"MEERA GUPTA",
    BorrowedBook: [
        // "title":"Percy Jackson",
        // "quantity":1,
        // "isbn":2,
        // "image":"https://m.media-amazon.com/images/I/91Ca-K4vjOL._AC_UF1000,1000_QL80_.jpg",
        // "Status":"Not Issued",
        // "description":"Second book description",
        // "authorName":"Mihir",
        // "authorId":2,
        // "AuthorImage":"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg",
        // "AuthorDescription":"AUTHOR OF PERCY JACKSON second"
        

],
    totalBookBorrowed: 0,
        booksBorrowed:[],
    quantity:0,
    password:"password",
    address:"Essel tower Ivory Court Gurugram",
    id:2
    
    

},
];



