import PostCard from "../../components/PostCard/PostCard";
import { NavBar } from "../../components/NavBar/NavBar";
import "./_HomePage.scss";
import { useGetAllPostsQuery } from "../../app/ecoCiencia.api";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { categories } from "../../utils/constants";
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {
  // const categories = ["Todas", "Categoria1", "Categoria2", "Categoria3"];
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
      {posts?.length === 0 ? (
        <h2 style={{ margin: "2rem 4rem" }}>Aún no hay publicaciones</h2>
      ) : (
        <div className="homePage">
          <div className="homePage__categories">
            <Box sx={{ width: "80%" }}>
              {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="basic tabs example"
                className="homePage__categories-tabs"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#D97D54",
                  },
                }}
              >
                {categories?.map((category, index) => (
                  <Tab
                    className="homePage__categories-tabs-tab"
                    label={category}
                    {...a11yProps(index)}
                    key={index}
                    // sx={{
                    //   color: value === index ? "#FF0000" : "#bbff00", // Cambia a tu color deseado
                    // }}
                  />
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
      )}
    </>
  );
}
