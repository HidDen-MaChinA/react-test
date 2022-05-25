import './App.css';
import { Data } from './Donner';

export function PrintAll() {
    return (
        Data.map((i) => {
            return (
                <tr>
                    <td>{i.name}</td>
                    <td>{i.position}</td>
                    <td>{i.office}</td>
                    <td>{i.age}</td>
                    <td>{i.startDate}</td>
                    <td>{i.salary}</td>
                </tr>
            )
        })
    )
}
export function Main(props) {
    const { children } = props;
    return (

        <div class="container-fluid px-4 limit">
            {children}
        </div>


    )
}
export function TableRowLabel() {
    return (
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
    )
}
export function TableAll(props) {
    const { children } = props;
    return (
        <div class="card-body">
            <table id="datatablesSimple">
                {children}
            </table>
        </div>
    )
}