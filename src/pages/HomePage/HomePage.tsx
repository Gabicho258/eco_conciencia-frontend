import PostCard from "../../components/PostCard/PostCard";
import { NavBar } from "../../components/NavBar/NavBar";
import "./_HomePage.scss";
import { useGetAllPostsQuery } from "../../app/ecoCiencia.api";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { SearchBar } from "../../components/SearchBar/SearchBar";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const categories = ["Todas", "Categoria1", "Categoria2", "Categoria3"];
  const { data: posts, refetch: refetchPosts } = useGetAllPostsQuery();
  const [value, setValue] = useState(0);

  const resultByCategory =
    value === 0
      ? posts
      : posts?.filter((post) => post.labels.includes(categories[value]));
  const { text, result, onChangeInput } = useSearch({ data: resultByCategory });
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    refetchPosts();
  }, []);
  return (
    <>
      <NavBar />
      <div className="homePage">
        <div className="homePage__categories">
          <Box sx={{ width: "80%" }}>
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {categories?.map((category, index) => (
                <Tab label={category} {...a11yProps(index)} key={index} />
              ))}
            </Tabs>
            {/* </Box> */}
          </Box>
          <SearchBar text={text} onChangeInput={onChangeInput} />
        </div>
        <div className="homePage__cards">
          {result?.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
}
