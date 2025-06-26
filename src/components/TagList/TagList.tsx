import { Link } from '../Link/Link';
import { tagList, tagListItem } from './TagList.css';

export interface TagListProps {
  tags: string[];
  mapping: Record<string, { title: string; url: string }>;
}

const TagList = ({ tags, mapping }: TagListProps) => {
  const items = new Set(tags).intersection(new Set(Object.keys(mapping)));

  return (
    <ul className={tagList}>
      {Array.from(items).map((key) => (
        <li key={key} className={tagListItem}>
          <Link href={mapping[key].url} variant="button">
            {mapping[key].title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
