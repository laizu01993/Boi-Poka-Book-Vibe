import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {

    const {bookId, image, bookName, author, tags, category, rating} = book;

    return (
       <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-8">
  <figure className="bg-slate-200 py-8 rounded-2xl">
    <img className=" h-[166px]"
      src={image} alt="" />
  </figure>
  <div className="card-body space-y-4">
    <div className="flex gap-4">
    {
        tags.map(tag => <button className="btn btn-xs text-lime-500 bg-slate-50">{tag}</button>)
    }
    </div>
    <h2 className="card-title font-bold text-2xl">
      {bookName}
    </h2>
    <p className="font-medium">By: {author}</p>
    <div className="border border-dashed"></div>
    <div className="justify-between flex">
    <div>{category}</div>
    <div className="flex items-center gap-2">{rating} <CiStar className="text-2xl"></CiStar></div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;