import { button } from './Button.css';

export const Button = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={`${button} ${className || ''}`} {...props} />;
};
