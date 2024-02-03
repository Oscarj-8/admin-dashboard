import PropTypes from "prop-types";

const Paginate = ({ currentPage, cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-3 py-1 ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } font-semibold mx-1 rounded`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Paginate;
