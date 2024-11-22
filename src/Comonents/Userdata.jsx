import { createContext, useState } from "react";


export const GmailContext = createContext()
const Userdata = ({ children }) => {

    const [gmailData, setgmaildata] = useState(null)

    const gmailHandelClick = () => {
        setgmaildata(alert("kire"))
    }

    return (
        <GmailContext.Provider value={{ gmailHandelClick}}>
            {children}
        </GmailContext.Provider>
    );
};

export default Userdata;