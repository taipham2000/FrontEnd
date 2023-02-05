import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserApi from '../../../apis/admin/UserApi';
import axios from 'axios';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

interface DatatableProps {
  addLink?: string;
  listContent?: any;
  listCollums?: any;
}
const userRows = [
  {
    id: 1,
    name: 'Snow',
    //   img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    //   status: 'active',
    //   email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    name: 'Snow',
    //   img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    //   status: 'active',
    //   email: '1snow@gmail.com',
    age: 35,
  },
];
const userColumns: any = [
  { field: 'id', headerName: 'ID', width: 70 },
  // {
  //   field: 'user',
  //   headerName: 'User',
  //   width: 230,
  //   renderCell: (params :any) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   field: 'email',
  //   headerName: 'Email',
  //   width: 230,
  // },

  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   width: 100,
  // },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 160,
  //   renderCell: (params) => {
  //     return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
  //   },
  // },

  {
    field: 'name',
    headerName: 'Project Name',
    width: 230,
    editable: true,
  },
  {
    field: 'full_name',
    headerName: 'fullName',
    width: 230,
    editable: true,
  },
  {
    field: 'url',
    headerName: 'URL',
    width: 230,
    editable: true,
  },
  {
    field: 'visibility',
    headerName: 'Status',
    width: 160,
    // renderCell: (params: any) => {
    //   return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
    // },
  },
];

function Datatable() {
  const a = [
    { id: 12, name: 'Hello' },
    { id: 13, name: 'Xin chao' },
    { id: 14, name: 'Tam biet' },
  ];

  const [listRepo, setListRepo] = useState<any>([]);
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: 'none' }}> */}
            <Button onClick={() => handleClickOpen(params)}>
              <div className="viewButton">View</div>
            </Button>
            {/* </Link> */}
          </div>
        );
      },
    },
  ];
  const getListReponsive = () => {
    axios.get(`https://api.github.com/users/taipham2000/repos`).then((res) => {
      setListRepo(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    axios.get(`https://api.github.com/users/taipham2000/repos`).then((res) => {
      setListRepo(res.data);
      console.log(res.data);
    });
    // getListReponsive();
  }, []);
  const [input, setInput] = useState<string>();
  const handleInput = (event: any) => {
    setInput(event.target.value);
    // console.log(event.target.value);
  };
  const [statusInput, setStatusInput] = useState<boolean>(false);
  const handleClick = () => {
    console.log(input);
    if (input === '' || input === undefined || input === null) {
      axios.get(`https://api.github.com/users/taipham2000/repos`).then((res) => {
        setListRepo(res.data);
      });
    } else {
      const a: any = listRepo.filter((x: any) => input === x.name);
      if (a.length !== 0) {
        setListRepo(a);
        setStatusInput(true);
      } else {
        if (statusInput === true) {
          axios.get(`https://api.github.com/users/taipham2000/repos`).then((res) => {
            setListRepo(res.data);
          });
        }
        setListRepo(a);
      }
    }
  };
  console.log(listRepo);
  const [open, setOpen] = useState(false);
  const [repoDetail, setRepoDetail] = useState<any>([]);
  const handleClickOpen = (params: any) => {
    setOpen(true);
    console.log(params.id);
    console.log(listRepo);
    const m = listRepo.filter((x: any) => x.id === params.id);
    setRepoDetail(m);
    console.log(m);
    const b = a.filter((x) => x.id === 12);
    console.log(b);
  };
  const key = 'update_at';
  // console.log(repoDetail[0]?.key);

  const handleClose = () => {
    setOpen(false);
  };
  const countries = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'American Samoa' },
  ];
  let transformed;
  if (repoDetail.length > 0) {
    transformed = repoDetail.map(({ updated_at, created_at }: any) => ({
      updateAt: updated_at,
      createAt: created_at,
    }));
  }
  console.log(transformed);
  return (
    <div className="datatable">
      <div className="datatableTitle">My Reponsitory</div>
      <Box display={'flex'}>
        <TextField
          id="outlined-basic"
          label="Search by Project Name"
          variant="outlined"
          onChange={(a: any) => {
            handleInput(a);
          }}
        />

        <Button
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </Button>
      </Box>
      <DataGrid
        className="datagrid"
        rows={listRepo}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Github Taipham2000</DialogTitle>
        <DialogContent>
          <DialogContentText>Repository details on Githubs</DialogContentText>
          <TextField
            autoFocus
            value={repoDetail[0]?.name}
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={repoDetail[0]?.full_name}
            margin="dense"
            id="full_name"
            label="Full Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={repoDetail[0]?.created_at}
            margin="dense"
            id="language"
            label="Date created"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={repoDetail[0]?.url}
            margin="dense"
            id="url"
            label="URL"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={repoDetail[0]?.visibility}
            margin="dense"
            id="name"
            label="Visibility"
            type="email"
            fullWidth
            variant="standard"
          />
          {repoDetail[0]?.language === null ? (
            <TextField
              autoFocus
              value="Language unknown"
              margin="dense"
              id="language"
              label="Language"
              type="email"
              fullWidth
              variant="standard"
            />
          ) : (
            <TextField
              autoFocus
              value={repoDetail[0]?.language}
              margin="dense"
              id="language"
              label="Language"
              type="email"
              fullWidth
              variant="standard"
            />
          )}

          <TextField
            autoFocus
            value={repoDetail[0]?.updated_at}
            margin="dense"
            id="language"
            label="Date updated"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Datatable;
