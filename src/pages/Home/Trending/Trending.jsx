import React from 'react';
import TrendItem from './TrendItem';

const Trending = () => {

    const trending = [
        { name: 'Grilled Salmon', img: 'https://kristineskitchenblog.com/wp-content/uploads/2020/07/grilling-salmon-1200-square-2609.jpg' },
        { name: 'Paella', img: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2012/07/paella-9174.jpg' },
        { name: 'Tacos al Pastor', img: 'https://i.ibb.co/TmbB9JK/al-pastor-3507w.jpg' },
        { name: 'Chicken Parmesan', img: 'https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg' }
    ]

    return (
        <div className='my-14 mx-2 md:mx-24 '>
            <h3 className='mx-4 md:mx-auto text-3xl my-primary font-semibold mb-8 md:mb-4'>Trending On !</h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>


                {
                    trending.map(trend => <TrendItem
                        key={trend.name}
                        trend={trend}
                    ></TrendItem>)
                }

            </div>
        </div>
    );
};

export default Trending;