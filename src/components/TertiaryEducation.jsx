import {
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";
import TertiaryEducationModal from "./modals/TertiaryEducationModal";
import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";
import AddEducationModal from "./modals/AddEducationModal";

const TertiaryEducation = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  console.log(data);

  return (
    <Stack
      minHeight={100}
      padding={2}
      sx={{ position: "relative" }}
      component={Paper}
      spacing={2}
    >
      {data?.tertiaryEducation?.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "background.paper" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Level
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Field Of Study
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Institution
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Year Started
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Status
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Year Completed
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.tertiaryEducation?.map((education, i) => {
                return (
                  <TableRow key={education.id}>
                    <TableCell align="center" component="th" scope="row">
                      {education.educationLevel}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {education.fieldOfStudy}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {education.institution}
                    </TableCell>
                    <TableCell align="center">
                      {education.startYear}
                    </TableCell>
                    <TableCell align="center">
                      {education.status}
                    </TableCell>
                    <TableCell align="center">
                      {education.endYear
                        ? education.endYear
                        : "-"}
                    </TableCell>
                    <TableCell align="center">
                      <AddEducationModal
                        basicEducation={data.basicEducation}
                        userId={data?.id}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
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
      )}
      <Stack
        // border={1}
        width="100%"
        direction="row"
        justifyContent="center"
      >
        <TertiaryEducationModal userId={data.id} />
      </Stack>
    </Stack>
  );
};

export default TertiaryEducation;
