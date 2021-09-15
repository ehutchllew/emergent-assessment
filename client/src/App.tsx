import React, { useState } from "react";
import "./App.css";
import { Form } from "./common/Form";
import { CELL_TYPE, CommonList } from "./common/list/CommonList";
import { softwareService } from "./services/softwareService";

function App() {
    const [listOfSoftware, setListOfSoftware] = useState([]);

    async function onSubmitForm(value: string): Promise<void> {
        try {
            const softwareList = await softwareService(value);
            setListOfSoftware(softwareList);
        } catch (e) {
            setListOfSoftware([]);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <section className="App-content-container">
                    <h1 className="App-title">Software Searcher</h1>
                    <Form
                        buttonLabel="Feeling Lucky"
                        onSubmitForm={onSubmitForm}
                    />
                </section>
                {listOfSoftware.length ? (
                    <CommonList
                        cells={listOfSoftware.map((software: any) => ({
                            type: CELL_TYPE.CELL_LABEL_VALUE,
                            label: software.name,
                            value: software.version,
                        }))}
                    />
                ) : (
                    <h2>No software found for that version</h2>
                )}
            </header>
        </div>
    );
}

export default App;
