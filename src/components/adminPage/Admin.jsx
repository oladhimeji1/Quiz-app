import './admin.css'
const Admin = () => {
    
    return(
        <div className="admin-panel">
            <secton className="side-bar">
                <h3 className="side-bar-head">Admin</h3>
                <div className="side-bar-items">
                    <ul>
                        <li><i className="fa fa-home"></i> Home</li>
                        <li><i className="fa fa-books"></i>&#xf518; Courses <i className="fa fa-angle-down"></i></li>
                        <li><i className="fa fa-cloud-upload"></i> Upload Questions</li>
                        <li><i className="fa fa-trash"></i> Truncate Table</li>
                    </ul>
                    <p className="logout"><i className="fa fa-sign-out"></i> Log Out</p>
                </div>
            </secton>
            {/* <div style={{float:'right'}}> */}
            <section className="main-body">
                <header>
                    <div>
                        <h3>Hello Oladimeji</h3>
                        <small>Welcome back Ola and great to meet you</small>
                    </div>
                    <i className="fa fa-search"></i>
                    <input placeholder="Search..." type="text" />
                </header>
                <div className="container">
                    <div className="card">
                        <i className="fa fa-users"></i>
                        <p>2,356</p>
                        <small>English Language</small>
                    </div>
                    <div className="card">
                    <i className="fa fa-user"></i>
                        <p>2,356</p>
                        <small>Mathematics</small>
                    </div>
                    <div className="card">
                    <i className="fa fa-cloud-upload"></i>
                        <p>2,356</p>
                        <small>Computer Sci</small>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <p><i className="fa fa-list-alt"></i> Details</p>
                        <p style={{color:'red'}}>English</p>
                    </div>
                    <nav>
                        <li>All Participants</li>
                        <li>Participants Details</li>
                    </nav>
                    {/* <table className="participants">
                        <tr>
                            <th>S/N</th>
                            <th>Names</th>
                        </tr>
                    </table> */}
                    <table className="particiDetails">
                        <tr>
                            <th>S/N</th>
                            <th>Names</th>
                            <th>Scores</th>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>3477</td>
                            <td>Oladimeji</td>
                            <td>100</td>
                        </tr>
                    </table>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Admin;
