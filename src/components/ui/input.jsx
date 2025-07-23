
export function Input(props) {
  return <input {...props} className={(props.className || "") + " px-2 py-1 rounded-md border"} />;
}
