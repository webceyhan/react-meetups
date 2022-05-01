export const MainNavigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-danger bg-opacity-75">
            <div className="container py-1">
                <a className="navbar-brand" href="#">
                    ReactMeetups
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                All Meetups
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Add New Meetup
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My Favorites
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
