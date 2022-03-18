import calendar from "./calendar.png";
import "./App.css";
import Footer from './Components/Footer';
import Users from './Components/Users';
import Events from './Components/Events';

function App() {
  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" width="70px" />
        <h1>Eventonica</h1>
      </header>

      <main>
        <div className="user-and-events">

        <div className="users-column">
          <Users />
        </div>

        <div className="events-column">
          <Events />
        </div>

        </div>

        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </main>

      <Footer />

    </div>
  );
}

export default App;