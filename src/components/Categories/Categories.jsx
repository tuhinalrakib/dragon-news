import  { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch("/categories.json").then(res=>res.json())

const Categories = () => {
    const categories = use(categoriesPromise)
    console.log(categories)

    return (
        <div>
            <h2 className='font-bold'>All Catogories</h2>
            <div className='grid grid-cols-1 gap-2 text-start'>
                {
                    categories.map(category=><NavLink key={category.id} className="btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-accent" to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;