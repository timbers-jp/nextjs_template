import Link from 'next/link';

export default function Item({ id = '', name }) {
  return (
    <Link href={`#${id}`}>
      <div className="group mx-2 my-8 flex flex-col items-center">
        <img src={`/images/icons/${id}.svg`} alt="" className="w-8 h-8" />
        <div className="px-2 py-0.5 rounded text-green-900 group-hover:text-white font-sansRound mt-2 whitespace-nowrap group-hover:bg-green-600">
          {name}
        </div>
      </div>
    </Link>
  );
}
