"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, setError, setLoading } from "./redux/features/courseSlice";
import styles from "./page.module.css";
import Button from "./button";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  author: string;
  cover_image: string;
  genren: [];
}

const Search = () => {
  const dispatch = useDispatch();

  const {courses, loading, error} = useSelector((state: any) => state.course);

  useEffect(() => {
    const fetchData = async () => {

      dispatch(setLoading(true))

      const URL = "https://freetestapi.com/api/v1/books";

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`error: status: ${response.status}`);
        }

        const result = await response.json();

        console.log("Response from API:", result);

        dispatch(setCourses(result));
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        dispatch(setError(error.message))
      }finally {
        dispatch(setLoading(false))
      }

      if(loading) {
        return <p>Loading....</p>;
      }

      if(error) {
        return <p>Error: {error}</p>
      }
      


    };


    fetchData();
  }, [dispatch]);

  return (
    
      <div className={styles.searchContainer}>
        <div className={styles.searchContent}>
          <h2 className={styles.searchheader}>
            Search Among <span className={styles.searchspan}>5234 </span>Courses
            And Find Your Favourite Course{" "}
          </h2>
        </div>

        <div className={styles.categoriesdiv}>
          <Button name="Categories" />

          <div className={styles.searchinputdiv}>
            <input
              className={styles.inputi}
              placeholder="search anything..."
            ></input>
          </div>
          
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

        <div className={styles.bookSection}>
          { courses.map((course: Course, index: number) => (
            <div className={styles.bookdiv} key={index}>
              <div className={styles.bookContainer}>
                <Image
                  src={course.cover_image}
                  width={300}
                  height={300}
                  alt={course.cover_image}
                  loading="lazy"
              
                />

                <h5 className={styles.title}>title : {course.title}</h5>
                <h5 className={styles.author}>author : {course.author} </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Search;
