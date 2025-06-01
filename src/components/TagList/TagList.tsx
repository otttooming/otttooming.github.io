import type { Tag as TagProps } from './tagMap';
import { Link } from '../Link/Link';
import { tagList, tagListItem } from './TagList.css';

export interface TagListProps {
  tags: TagProps[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={tagList}>
      {tags.map(({ title, url }) => (
        <li key={title} className={tagListItem}>
          <Link href={url}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
