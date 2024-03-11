import { expect } from 'chai';
import 'mocha';

import {Observable, Observer} from '../src/Interfaces/Interfaces.js'
import {Feed} from '../src/Noticias/Noticias.js'
import {Subscriptor} from '../src/Subscriptores/Subcriptores.js'


describe('Periodico Sistema de Subcripcion', () => {
    it('Probar la clase Subscriptor', () => {
        const firstSubscriptor = new Subscriptor(0, 'firstSubscriptor');
        expect(firstSubscriptor.getId()).to.be.eql(0);
        expect(firstSubscriptor.getName()).to.be.eql('firstSubscriptor');
    });

    it('Probar a subscribir más de una vez', () => {
        const feed = new Feed(0, 'Noticias');

        const firstSubscriptor = new Subscriptor(0, 'firstSubscriptor');
        let is_subscribe: string = "";

        feed.subscribe(firstSubscriptor);

        try {
            feed.subscribe(firstSubscriptor);
          } catch (error) {
            is_subscribe = "Devolvio error";
            console.log('firstSubscriptor was already subscribed');
        }
        
        expect(is_subscribe).to.be.eql("Devolvio error");
      
    });
    it('Debería permitir subscrirse al feed', () => {
        const feed = new Feed(0, 'Noticias');

        const firstSubscriptor = new Subscriptor(0, 'firstSubscriptor');
        const secondSubscriptor = new Subscriptor(1, 'secondSubscriptor');
    
        feed.subscribe(firstSubscriptor);
        feed.subscribe(secondSubscriptor);
        
        
        console.log('Se actualizará el feed...');
        feed.feedUpdate('¡Última hora: hará mal tiempo en la Laguna!');


        console.log('firstSubscriptor unsubscription');
        feed.unsubscribe(firstSubscriptor);
        
        console.log('Se actualizará el feed...');
        feed.feedUpdate('¡Última hora: Descubren un tesoro en La Palma!');

        expect(feed.getObserver()).to.length(1);
        expect(feed.getFeed()).to.length(3);
    });
  });
  