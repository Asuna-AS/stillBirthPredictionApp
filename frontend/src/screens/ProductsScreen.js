import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';
import fit from "../fit.png" 
import yb from "../yoga-brain.png" 
import yh from "../yoga-heart.png" 
const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className="pt-24 mx-auto pl-60 pr-20">
            {/* heading  */}
            <Heading title="Blogs" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                <Bounce left>
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 hover:text-black hover:shadow- duration-300'><a href='https://www.credihealth.com/blog/things-to-do-to-stay-fit-and-healthy/'><img src={fit}></img><p className='text-center poppins pt-3'>How to stay fit and Healthy?</p></a></div>
                </Bounce>
                <Bounce>
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 hover:text-black duration-300'><a href="https://www.healthifyme.com/blog/best-indian-diet-plan-weight-loss/"><img src={yh}></img><p className='text-center poppins pt-3'>Diet chart to keep your body healthy</p></a></div>
                </Bounce>
                <Bounce right>
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 hover:text-black duration-300'><a href="https://www.medicalnewstoday.com/articles/160774/"><img src={yb}></img><p className='text-center poppins pt-3'>Nutrition</p></a></div>
                </Bounce>
            </div>

        </section>
    )
}

export default ProductsScreen
