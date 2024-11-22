
import { GmailContext } from "./Userdata";


const Githubaccoun = ({gmailHandelClick}) => {
    const { gmailHandelClick } = useContext(GmailContext)

    

    return (
        <div>
            <button onClick={gmailHandelClick} className="bg-[#1fc472] py-2 px-4 rounded-md">Github SignIn</button>
        </div>
    );
};

export default Githubaccoun;