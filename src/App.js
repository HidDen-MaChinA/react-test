import AllBody from "./body"
import { Nav, SearchBarre, MyAcc } from "./header"
export default function App() {
    return (
        <>
            <Nav>
                <SearchBarre />
                <MyAcc />
            </Nav>
            <AllBody />
        </>
    )
}