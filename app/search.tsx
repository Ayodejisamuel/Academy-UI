"use client";
import React, {  useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { setCourses } from "./redux/features/courseSlice";
import styles from "./page.module.css";
import Button from "./button";
import Image from "next/image";

interface Course {

  id: number;
  title: string;
  author: string;
  cover_image: string;

}

const Search = () => {

  const dispatch = useDispatch()

  const courses = useSelector((state: any) => state.course.courses)

  
  useEffect(() => {
    const fetchData = async () => {
    
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
      }
    };
  
    fetchData();
  }, [ dispatch]);

  return (
<Provider store={store}>
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <h2 className={styles.searchheader}>
          Search Among <span className={styles.searchspan}>5234 </span>Courses
          And Find Your Favourite Course{" "}
        </h2>
      </div>

      <div className={styles.categoriesdiv}>
        <div className={styles.catbtn}>
          <Button name="Categories" />
        </div>
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

      <div className={styles.bookSection} >
        {courses.map((course: Course, index: number) => (
          <div className={styles.bookdiv} key={index}>
            <div className={styles.bookContainer}>
              <Image
                src={course.cover_image}
                width={300}
                height={300}
                alt={`Cover of ${course.title}`}
              />

              <h5 className={styles.title}>title : {course.title}</h5>
              <h5 className={styles.author}>author : {course.author} </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Provider>
  );
};


export default Search;
