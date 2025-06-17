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
                colorsFilter += entry[1];
            } else if (entry[0] === "types") {
                typesFilter += entry[1];
            } else if (entry[0] === "id") {
                idFilter += entry[1];
            } else if (entry[0] === "name") {
                nameFilter += entry[1];
            }
        }

        const searchParams = `?${colorsFilter !== '' ? `c=${colorsFilter}` : ``}`;
        const typeParams = `?${typesFilter !== '' ? `c=${typesFilter}` : ``}`;
        const idParams = `?${idFilter !== '' ? `c=${idFilter}` : ``}`;
        const nameParams = `?${nameFilter !== '' ? `c=${nameFilter}` : ``}`;
        redirect(`/cards${searchParams}`)
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
                        </div>
                        <div className="button-section">
                            <button type="submit">Search</button>
                            <button>Clear</button>
                        </div>
                    </Form>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
