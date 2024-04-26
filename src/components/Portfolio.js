import React from 'react'
import Art from './Art'
import './portfolio.scss'

const collection = [
    { name: 'beeunique.jpg', title: 'Be Unique', position: 'bottom-right' },
    { name: 'beginnings.jpg', title: 'Beginnings', position: 'top-left' },
    { name: 'canadianwonders.jpg', title: 'Canadian Wonders', position: 'top-left' },
    { name: 'daydreamer.jpg', title: 'Day Dreamer', position: 'top-left' },
    { name: 'kyoshi.jpg', title: 'Kyoshi', position: 'top-left' },
    { name: 'unconditional.png', title: 'Unconditional', position: 'bottom-right' },
    { name: 'makelemonade.png', title: 'Make Lemonade', position: 'top-left' },
    { name: 'winter.jpg', title: 'Winter Destress', position: 'top-left' },
    { name: 'competitive.png', title: 'Competitive', position: 'top-left' },
    { name: 'hawkgirl.jpg', title: 'Hawkgirl', position: 'top-left' },
    { name: 'lovableimp.png', title: 'Lovable Imp', position: 'top-left' },
    { name: 'mothertongue1.png', title: 'Mother tongue', position: 'top-left' },
    { name: 'nightvision.jpg', title: 'Night Vision', position: 'top-left' },
    { name: 'simple.jpg', title: 'Simple', position: 'top-left' },
    { name: 'thirdcharm.jpg', title: 'Third time\'s a charm', position: 'top-left' },
    { name: 'yasmin.jpg', title: 'Yasmin', position: 'top-left' },
    { name: 'expectations.png', title: 'Expectations', position: 'top-right' },
    { name: 'followingafriend.jpg', title: 'Following a friend', position: 'top-right' },
    { name: 'yinyang.png', title: 'Yin Yang', position: 'top-left' }
];

const Portfolio = () => {
    return (
        <div className="images">
            <Art collection={collection} />
        </div>
    )
}

export default Portfolio



