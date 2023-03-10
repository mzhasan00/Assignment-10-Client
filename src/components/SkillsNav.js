import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillsNav.css'



const SkillsNav = () => {

    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('https://b610-lerning-platform-server-side-hasan-1911001.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data.data))
    }, [])

    return(
        <div className='skillsnav'>
            <h4>Courses:</h4>
            <div >
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to={`/quiz/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>  
     );
};

export default SkillsNav;