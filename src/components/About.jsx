import React from 'react';
import Card from './Card';

export default function About() {
    
   const data =[{name:'John',email:'John@example.com' ,desc:'Lorem ipsum dolor sit, amet consectetur adipisicing.',image:''},
            {name:'Tina',email:'Tina@example.com' ,desc:'Lorem ipsum dolor sit, amet consectetur adipisicing.',image:''},
        {name:'Swayam',email:'Sway@example.com' ,desc:'Lorem ipsum dolor sit, amet consectetur adipisicing.',image:''},
        {name:'ChetanBot',email:'CheBot@example.com' ,desc:'Lorem ipsum dolor sit, amet consectetur adipisicing.',image:''}
        ]
    
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 bg-zinc-300 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1714312634720-ae1f906d09d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Ravi Shankar
                        </h2>
                        <h5 className="text-1xl text-gray-900  md:text-1xl">Project Lead</h5>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl font-semibold text-orange-500">MEMBERS</h1>
            <div className='flex gap-10 flex-wrap items-start justify-center w-11/12 mx-auto p-5'>
                    {data.map((elem,index)=>(<Card key={index} values={elem} />))}
                </div>
        </div>
    );
}