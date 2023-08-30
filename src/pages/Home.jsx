import { useQuery } from "@tanstack/react-query";
import ApiQueries from "../apiQuries";
import StudentsHome from "../components/StudentsHome";
import { Typography } from "@mui/material";


const Home = () => {
  
  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => {
      return ApiQueries.userInfo();
    }

    // staleTime: 1000 * 60 * 60 * 24
  });


  if(data?.userType === 'student'){
    return <StudentsHome />
  }

  return(
    <Typography>Admin</Typography>
  )

};

export default Home;
