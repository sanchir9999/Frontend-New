"use client"
const { createAccount, createContext, useState } = require("react"
)

export const AddRecordContext = createContext(null);
export const AddRecordContextProvider = ({ children }) => {
    const [addInfo, setAddInfo] = useState({ firstname: "ner", lastname: "ovog" })

    return (
        <AddRecordContext.Provider value={{ addInfo, setAddInfo }}>
            {children}
        </AddRecordContext.Provider>
    )
}
