
export function Button(props) {
  return <button {...props} className={(props.className || "") + " px-2 py-1 rounded-md border"} />;
}
