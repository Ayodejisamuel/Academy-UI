"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCourses, setLoading } from "./redux/features/courseSlice";
import { setSearchData } from "./redux/features/searchSlice";
import styles from "./page.module.css";
import Button from "./button";
import Display from "./display";
import SearchInput from "./searchInput";

const Search = () => {
  const dispatch = useDispatch();

  const searchData = useSelector((state: any) => state.search.searchData);
  const handleSearchData = (value: string) => {
    dispatch(setSearchData.setSearchData(value));
  };

  useEffect(() => {
    const fetchData = async (searchData: any) => {
      dispatch(setLoading(true));

      const URL = `https://freetestapi.com/api/v1/books?search=${searchData}`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`error: status: ${response.status}`);
        }

        const result = await response.json();

        console.log("Response from API:", result);

        dispatch(setCourses(result));

        dispatch(setLoading(result));

        console.log(result);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData(searchData || "The");
  }, [dispatch]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <h2 className={styles.searchheader}>
          Search Among <span className={styles.searchspan}>5234 </span>Courses
          And Find Your Favourite Course
        </h2>
      </div>

      <div className={styles.categoriesdiv}>
        <Button name="Categories" />

        <SearchInput searchData={searchData} setDataValue={handleSearchData} />
        <div className={styles.view}>or view the following courses...</div>
      </div>

      <div>
        <div className={styles.courseDiv}>
          <h1 className={styles.courseHeader}>NEW COURSES(BOOKS)</h1>
          <div className={styles.links}>
            <a href="">All Course</a>
            <a href=""> Design</a>
            <a href="">Development</a>
            <a href="">Music</a>
          </div>
        </div>
      </div>

      <Display />
    </div>
  );
};

export default Search;
