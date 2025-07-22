export function Textarea(props) {
  return <textarea {...props} className={`w-full px-4 py-2 min-h-[100px] ${props.className}`} />;
}