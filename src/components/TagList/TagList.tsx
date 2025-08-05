import { Link } from '../Link/Link';
import * as styles from './TagList.css';

export interface TagListProps {
  tags: string[];
  mapping: Record<string, { title: string; url: string }>;
}

const TagList = ({ tags, mapping }: TagListProps) => {
  const items = new Set(tags).intersection(new Set(Object.keys(mapping)));

  return (
    <ul className={styles.wrapper}>
      {Array.from(items).map((key) => (
        <li key={key}>
          <Link href={mapping[key].url} variant="button">
            {mapping[key].title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
