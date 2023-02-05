import Datatable from '../../../components/common/datatable/Datatable';
import Navbar from '../../../components/common/navbar/Navbar';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import './list.scss';

const List = () => {
  return (
    <>
      {/* {console.log(userRows)} */}
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Datatable />
        </div>
      </div>
    </>
  );
};

export default List;
