
export function Card(props) {
  return <card {...props} className={(props.className || "") + " px-2 py-1 rounded-md border"} />;
}
