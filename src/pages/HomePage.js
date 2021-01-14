import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id:1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' 
    },
    {
        id:2,
        title: 'Czym jest paradoks Fermiego',
        author: 'Pio Bossek',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' 
    },
    {
        id:3,
        title: 'Ciemna materia i ciemna energia',
        author: 'Adam Kowalski',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' 
    }
]
const HomePage = () => {
    const artList = articles.map(item => (
        <Article key={item.id} {...item} />
   
    ))
    return ( 
        <div className='home'>
            {artList}
        </div>
     );
}
 
export default HomePage;