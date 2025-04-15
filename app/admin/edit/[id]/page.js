import EditForm from "./form";

export default async function EditPage({params}) {

  const res = await fetch(`http://localhost:4000/instruments/${params.id}`);
  cache: 'no-store';
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