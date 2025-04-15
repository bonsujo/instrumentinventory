import EditForm from "./form";

export default async function EditPage(props) {
  const { id } = props.params;

  const res = await fetch(`http://localhost:4000/instruments/${id}`);
  if (!res.ok) {
    return <div>Instrument not found.</div>;
  }

  const data = await res.json();

  return (
    <div>
      <EditForm instrument={data} />
    </div>
  );
}