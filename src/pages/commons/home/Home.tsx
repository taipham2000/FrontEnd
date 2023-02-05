import Sidebar from '../../../components/common/sidebar/Sidebar';
import Navbar from '../../../components/common/navbar/Navbar';
import './home.scss';
import Widget from '../../../components/common/widget/Widget';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
        </div>
      </div>
    </div>
  );
};

export default Home;
