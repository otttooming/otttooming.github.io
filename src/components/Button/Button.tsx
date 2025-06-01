import { button } from './Button.css';

export const Button = ({
  ...props
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) => {
  return <button className={button} {...props} />;
};
