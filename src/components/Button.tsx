type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";

  padding?: number | string;
  borderRadius?: number | string;
};

export default function Button({
  children,
  icon,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  padding = "0.5rem 1rem",
  borderRadius = "0.5rem",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ padding, borderRadius }}
      className={`
        inline-flex items-center gap-2
        transition-all
        cursor-pointer
        focus:outline-none focus-visible:ring-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
