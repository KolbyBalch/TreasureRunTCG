import { Accordion, AccordionItem } from "@heroui/accordion";

export function Filter() {
    return (
        <div className='search-bar'>
            <Accordion variant="shadow">
                <AccordionItem key="1" aria-label="Search and filter" title="Search">
                    <form>
                        <div className="filter-section">
                            <span>By Color</span>
                            <label>
                                <input type="checkbox" value="Y"/>
                                Yellow
                            </label>
                            <label>
                                <input type="checkbox" value="R"/>
                                Red
                            </label>
                            <label>
                                <input type="checkbox" value="B"/>
                                Blue
                            </label>
                            <label>
                                <input type="checkbox" value="V"/>
                                Violet
                            </label>
                            <label>
                                <input type="checkbox" value="G"/>
                                Green
                            </label>
                            <label>
                                <input type="checkbox" value="C"/>
                                Colorless
                            </label>
                        </div>
                        <div className="filter-section">
                            <span>By Type</span>
                        </div>
                        <div className="button-section">
                            <button type="submit">Search</button>
                            <button type="submit">Clear</button>
                        </div>
                    </form>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
