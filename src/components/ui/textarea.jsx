
export function Textarea(props) {
  return <textarea {...props} className={(props.className || "") + " px-2 py-1 rounded-md border"} />;
}
