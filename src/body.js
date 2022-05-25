import { Main, TableAll, TableRowLabel } from "./App"
import { PrintAll } from "./App"
export function OtherNAv(props) {
    const { children } = props
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            {children}
                        </div>
                    </div>
                    <Lo />
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <Test />
            </div>
        </div>


    )
}
export function Dashboard() {
    return (
        <>
            <a class="nav-link" href="index.html">
                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                Dashboard
            </a>
        </>
    )
}
export function LaoutsInterface() {
    return (
        <>
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                Layouts
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
            </a>
        </>
    )
}
export function PagesInterface() {
    return (
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
            Pages
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
    )
}
export function ChartsAddon() {
    return (
        <a class="nav-link" href="charts.html">
            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
            Charts
        </a>
    )
}
export function Table() {
    return (
        <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
            Tables
        </a>
    )
}
export function Core(props) {
    const { children } = props;
    return (
        <>
            <div class="sb-sidenav-menu-heading">Core</div>
            {children}
        </>
    )
}
export function Interface(props) {
    const { children } = props;
    return (
        <>
            <div class="sb-sidenav-menu-heading">Interface</div>
            {children}
        </>
    )
}
export function Addons(props) {
    const { children } = props;
    return (
        <>
            <div class="sb-sidenav-menu-heading">Addons</div>
            {children}
        </>
    )
}
export function Lo() {
    return (
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            Start Bootstrap
        </div>
    )
}
export function Test() {
    return (
        <div className="card-body">
            <h1 class="mt-4">Tables</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Tables</li>
            </ol>
            <MiniTruc />
            <div class="card mb-4">

                <DataTable />
                <Search/>
                <div class="dataTable-container">
                
                    <Main>
                        <TableAll>
                            <PrintAll />
                        </TableAll>
                    </Main>
                </div>
            </div>
        </div>

    )
}
export function DataTable() {
    return (
        <div class="card-header">
            <svg class="svg-inline--fa fa-table me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z"></path></svg>
            DataTable Example
        </div>
    )
}
export function MiniTruc() {
    <div class="card mb-4">
        <div class="card-body">
            DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
            <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
            .
        </div>
    </div>
}
export function Search() {
    return (
        <table id="datatablesSimple" class="dataTable-table">
            <thead>
                <tr><th data-sortable="" style="width: 19.1939%;"><a href="#" class="dataTable-sorter">Name</a></th><th data-sortable="" style="width: 28.6948%;"><a href="#" class="dataTable-sorter">Position</a></th><th data-sortable="" style="width: 15.4511%;"><a href="#" class="dataTable-sorter">Office</a></th><th data-sortable="" style="width: 9.30902%;"><a href="#" class="dataTable-sorter">Age</a></th><th data-sortable="" style="width: 15.4511%;"><a href="#" class="dataTable-sorter">Start date</a></th><th data-sortable="" style="width: 11.9002%;"><a href="#" class="dataTable-sorter">Salary</a></th></tr>
            </thead>

            <tbody><tr><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td>2011/04/25</td><td>$320,800</td></tr><tr><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td>2011/07/25</td><td>$170,750</td></tr><tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr><tr><td>Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr><td>Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr><td>Herrod Chandler</td><td>Sales Assistant</td><td>San Francisco</td><td>59</td><td>2012/08/06</td><td>$137,500</td></tr><tr><td>Rhona Davidson</td><td>Integration Specialist</td><td>Tokyo</td><td>55</td><td>2010/10/14</td><td>$327,900</td></tr><tr><td>Colleen Hurst</td><td>Javascript Developer</td><td>San Francisco</td><td>39</td><td>2009/09/15</td><td>$205,500</td></tr><tr><td>Sonya Frost</td><td>Software Engineer</td><td>Edinburgh</td><td>23</td><td>2008/12/13</td><td>$103,600</td></tr></tbody>
        </table>
    )
}