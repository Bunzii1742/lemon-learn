export function Input(props) {
  return <input {...props} className={`w-full px-4 py-2 ${props.className}`} />;
}