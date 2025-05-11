import { getLocale } from "next-intl/server";
import Link from "next/link";

import { getAllThoughts } from "../features/thought/actions";

export const metadata = {
  title: "Thoughts",
};

export default async function Page() {
  const locale = await getLocale();
  const thoughts = await getAllThoughts(locale);
  return (
    <div>
      <ul>
        {thoughts.map((item) => (
          <li key={item.slug} className="font-medium">
            <Link
              href={`/thoughts/${item.slug}`}
              className="group flex gap-1 justify-between items-center"
              draggable={false}
            >
              <span className="block text-rurikon-500 group-hover:text-rurikon-700">
                {item.title}
              </span>
              <span className="text-sm dot-leaders flex-1 text-rurikon-100 font-normal group-hover:text-rurikon-500 transition-colors group-hover:transition-none leading-none" />
              <time className="block text-rurikon-200 tabular-nums font-normal tracking-tighter group-hover:text-rurikon-500 transition-colors group-hover:transition-none self-start">
                {item.date}
              </time>
              {item.content && <item.content />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
