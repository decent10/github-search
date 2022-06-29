import { SearchFormProps } from "../types";

export default function SearchForm({
  onSearchFormSubmit,
  query,
  onSearchInputChange,
}: SearchFormProps) {
  return (
    <form className="my-8 flex outline-1" onSubmit={onSearchFormSubmit}>
      <input
        className=" flex-1 rounded-l-lg outline-0 p-4 border-t mr-0 border-b border-l placeholder:text-gray-400 placeholder:italic text-slate-600 border-gray-200 bg-white"
        placeholder="Look for github users"
        name="query"
        value={query}
        onChange={onSearchInputChange}
      />
      <button
        type="submit"
        className="px-8  rounded-r-lg  text-slate-600  p-4 uppercase border-t bg-white border-b border-r"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
}
