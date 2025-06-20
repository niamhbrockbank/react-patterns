import { createContext, useContext, useState } from "react"
import AccordionItem from "./AccordionItem"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)

    if (!ctx){
        throw new Error('To use this requires the <Accordion> wrapper component.')
    }

    return ctx
}

export default function Accordion({children, className}){
    const [openItemId, setOpenItemId] = useState()

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id)
    }

    const contextValue = {
        openItemId,
        toggleItem
    }

    return (
    <AccordionContext.Provider value={contextValue}>
        <ul className={className}>
            {children}
        </ul>
    </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent