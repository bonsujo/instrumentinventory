import EditForm from "../../../../components/EditForm";
import { getInstrumentById } from "../../../../lib/api";

export default async function EditPage({params}){
    const instrument = await getInstrumentById(params.id)

    return(
        <div>
            <h1>Edit Instrument</h1>
            {instrument ? <EditForm instrument = {instrument} /> : <p>Instrument not found</p>}
        </div>
    )
}