import {
  Alert,
  IconButton,
  LinearProgress,
  Paper,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";

import EditIcon from "@mui/icons-material/Edit";
import AddEducationModal from "./modals/AddEducationModal";

const BasicEducation = () => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Error happened fetching your information
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Stack minHeight={100} padding={2} spacing={2} component={Paper}>
      {data?.basicEducation ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "background.paper" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Highest Grade Passed
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  High School Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  City
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Province
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" component="th" scope="row">
                  {data?.basicEducation?.grade}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {data?.basicEducation?.school}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {data?.basicEducation?.city}
                </TableCell>
                <TableCell align="center">
                  {data?.basicEducation?.province}
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <EditIcon sx={{ color: "primary.main" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
            {/* <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                // colSpan={3}
                count={employees?.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter> */}
          </Table>
        </TableContainer>
      ) : (
        <Stack direction="row" justifyContent="center">
          <AddEducationModal
            basicEducation={data.basicEducation}
            userId={data?.id}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default BasicEducation;
