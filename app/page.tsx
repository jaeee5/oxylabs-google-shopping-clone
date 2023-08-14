import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Sunglasses under $500",
    url: "/search/sunglasses?sort_by=r&max_price=500",
    color:"bg-blue-500"
  },
  {
    id: 2,
    term: "iPhone 14 Pro Max",
    url: "/search/iphone 14 pro max",
    color: "bg-red-500",
  },
  {
    id: 3,
    term: "Coffee Machines over $150 ",
    url: "/search/coffee%20machines?sort_by=r&min_price=150",
    color: "bg-yellow-500"
  },
  {
    id: 4,
    term: "Monitors over $400",
    url: "/search/monitors?sort_by=r&min_price=400",
    color: "bg-green-500",
  },
  {
    id: 5,
    term: "Airpods Pro",
    url: "/search/airpodspro",
    color: "bg-purple-600",
  }
];


export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the example search items or typing in an item yourself above!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {
          //map through searches and dispslay them
          SEARCHES.map(search => (
            <Link 
              prefetch={false}
              key={search.id}
              href={search.url}
              className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
            >
              {search.term}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
