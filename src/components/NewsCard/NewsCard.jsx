import { CiBookmark } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Author and Date */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{new Date(author.published_date).toDateString()}</p>
          </div>
        </div>
        <div className="tooltip tooltip-left" data-tip="Bookmark">
          <button className="btn btn-sm btn-ghost"><CiBookmark size={24}/></button>
          <button className="btn btn-sm btn-ghost"><IoMdShare size={24}/></button>
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt="news" className="w-full h-64 object-cover" />
      </figure>

      {/* News Content */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
        </p>
        <a className="text-primary font-semibold hover:underline mt-2 cursor-pointer">Read More</a>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar />
            <span>{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
