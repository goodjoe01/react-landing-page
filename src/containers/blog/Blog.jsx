import React, {useRef} from 'react'
import {images} from './import'
import Article from '../../components/article/Article'
import { useState } from 'react'
import { useEffect } from 'react'
import './blog.css'

const LazyBlog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <div className='gpt3__blog-container_groupB-firstArticle'>
          <Article imgUrl={images.blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <Article imgUrl={images.blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={images.blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={images.blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={images.blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
  </div>
  )
}

const Blog = () => {
  const [display, setDisplay] = useState(false);
  const elementRef = useRef();

  useEffect(()=>{

    const onChange = (entries, observer) => {
      console.log(entries)
      const elements = entries[0];

      if(elements.isIntersecting) {
        setDisplay(true);
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();

  });

  return (
    <div ref={elementRef}>
      {
        display? <LazyBlog/> : null
      }
    </div>
  )
}

export default Blog
