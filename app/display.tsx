'use client'
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
 import { useSelector } from 'react-redux';



interface Course {

    id: number;
    title: string;
    author: string;
    cover_image: string;
    genren: [];
  
  }

 const Display = () => {


    const { courses} = useSelector(
        (state: any) => state.course
      );
    
   
 return (
    <div className={styles.bookSection}>
    {courses && courses.map((course: Course, index: number) => (
        <div className={styles.bookdiv} key={index}>
          <div className={styles.bookContainer}>
            <Image
              src={course.cover_image}
              width={290}
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
 )
}

export default Display