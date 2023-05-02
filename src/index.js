import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// function Greeting() {
//     return React.createElement('h2', {}, "hello word")
// };

function Greeting() {
  // return (
  //     <>
  //         <div>
  //             <h3>hello people</h3>
  //             <ul>
  //                 <li>
  //                     <a href="#">hello wold</a>
  //                 </li>
  //             </ul>
  //         </div>
  //         <h2>haha</h2>
  //     </>)
}

const books = [
  {
    author: "Liu, Ci Xin",
    title: "The Three-Body Problem",
    img: "./images/book-1.jpg",
    id: 0,
  },
  {
    author: "Liu, Ci Xin",
    title: "The Three-Body Problem 1",
    img: "./images/book-2.jpg",
    id: 1,
  },
  {
    author: "Liu, Ci Xin",
    title: "The Three-Body Problem 1",
    img: "./images/book-3.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {/* <Book author={book1.author} title={book1.title} img={book1.img} />
            <Book author={book1.author} title={book1.title} img={book1.img} />
            <Book author={book1.author} title={book1.title} img={book1.img} />
            <Book author={book1.author} title={book1.title} img={book1.img} /> */}

      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>

      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // const {img, title, author} = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
