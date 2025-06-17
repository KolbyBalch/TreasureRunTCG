import { Accordion, AccordionItem } from "@heroui/accordion";
import { Form } from "@heroui/form";
import { redirect } from "next/navigation";

export function Filter() {
    async function handleSubmit(formdata) {
        let colorsFilter = '';
        let typesFilter = '';
        let idFilter = '';
        let nameFilter = '';

        for (const entry of formdata.entries()) {
            if (entry[0] === "color") {
                colorsFilter += entry[1].replace(/[^A-Z0-9]/ig, "");;
            } else if (entry[0] === "types") {
                typesFilter += entry[1].replace(/[^A-Z0-9]/ig, "");;
            } else if (entry[0] === "id") {
                idFilter += entry[1].replace(/[^A-Z0-9]/ig, "");;
            } else if (entry[0] === "name") {
                nameFilter += entry[1].replace(/[^A-Z0-9]/ig, "");;
            }
        }

        const colorParams = `${colorsFilter !== '' ? `c=${colorsFilter}` : ``}`;
        const typeParams = `${typesFilter !== '' ? `t=${typesFilter}` : ``}`;
        const idParams = `${idFilter !== '' ? `id=${idFilter}` : ``}`;
        const nameParams = `${nameFilter !== '' ? `n=${nameFilter}` : ``}`;

        const searchParams = [colorParams, typeParams, idParams, nameParams].filter(param => param !== '').join('&');

        redirect(`/cards?${searchParams}`)
    }

    async function handleClear() {
        redirect('/cards')
    }

    return (
        <div className='search-bar'>
            <Accordion variant="shadow">
                <AccordionItem key="1" aria-label="Search and filter" title="Search">
                    <Form action={handleSubmit}>
                        <div className="filter-section">
                            <span>By Color</span>
                            <label>
                                <input name="color" type="checkbox" value="Y"/>
                                Yellow
                            </label>
                            <label>
                                <input name="color" type="checkbox" value="R"/>
                                Red
                            </label>
                            <label>
                                <input name="color" type="checkbox" value="B"/>
                                Blue
                            </label>
                            <label>
                                <input name="color" type="checkbox" value="V"/>
                                Violet
                            </label>
                            <label>
                                <input name="color" type="checkbox" value="G"/>
                                Green
                            </label>
                            <label>
                                <input name="color" type="checkbox" value="C"/>
                                Colorless
                            </label>
                        </div>
                        <div className="filter-section">
                            <span>By Type</span>
                            <input name="types" type="text"/>
                        </div>
                        <div className="filter-section">
                            <span>By Name</span>
                            <input name="name" type="text"/>
                        </div>
                        <div className="button-section">
                            <button type="submit">Search</button>
                            <button onClick={handleClear}>Clear</button>
                        </div>
                    </Form>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
