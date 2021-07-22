import React from 'react';
import Banner from '../../assets/banner-bw-cs.jpg'

import {HomePageContainer, HomePageText, HomePageSubtitle, HomePageSubtext} from './homepage.styles';

const HomePage = () => (
  <div className='homepage'>
    <img src={Banner} alt="banner" className="banner" />
    <HomePageContainer>
      <h3>Bereit für den Sale des Jahres?</h3>
      <HomePageText>Am 27. November 2020 ist Black Friday. Doch einen Tag voller Schnäppchen kann jeder. Wir setzen noch einen drauf und machen aus dem Black Friday Sale eine ganze BLACK WEEK!
        Das heißt: Eine Woche lang von unglaublichen Rabatten profitieren und Shoppen bis zum Umfallen - und das ganz bequem vom Sofa aus.</HomePageText>
      <HomePageSubtitle>Am Dienstag, 24. November 2020 um 12 Uhr geht's los.</HomePageSubtitle>
      <HomePageText>Entdecken Sie schon jetzt Teppiche & Accessoires und merken Sie sich Ihre Favoriten für die
        Preisschlacht des Jahres vor.</HomePageText>
      <HomePageSubtext>Jetzt schon stöbern:</HomePageSubtext>
    </HomePageContainer>
  </div>
);

export default HomePage;