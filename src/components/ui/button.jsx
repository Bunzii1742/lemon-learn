export function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`rounded-md px-4 py-2 font-semibold ${className}`}>
      {children}
    </button>
  );
}