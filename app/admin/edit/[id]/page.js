import EditForm from "../../../../components/EditForm";

export default async function EditPage({ params }) {
    const { id } = params;
  
    const res = await fetch(`http://localhost:4000/instruments/${id}`);
    if (!res.ok) {
      return <p>Instrument with {id} not found</p>;
    }
  
    const instrument = await res.json();
  
    return (
      <div>
        <h1>Edit Instrument</h1>
        <EditForm instrument={instrument} />
      </div>
    );
  }