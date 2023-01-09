

import { ToyPreview } from "./toy-preview.jsx"


export function ToyList({ toys }) {

    return <ul className="toy-list">
        {toys.map(toy =>
            <li className="toy-preview" key={toy._id}>
                <ToyPreview toy={toy} />

                <div>
                    <button >x</button>
                    <button >Edit toy</button>
                </div>

            </li>)}
    </ul>
}




