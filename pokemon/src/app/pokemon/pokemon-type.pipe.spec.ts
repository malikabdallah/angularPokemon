import { PokemonTypePipe } from './pokemon-type.pipe';

fdescribe('PokemonTypePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypePipe();
    expect(pipe).toBeTruthy();
  });


  it('tester toutes les combinaisons"', () => {
    const pipe=new PokemonTypePipe();
    expect(pipe.transform('Feu')).toBe('chip red lighten-1');
    expect(pipe.transform('Eau')).toBe('chip blue lighten-1');
    expect(pipe.transform('Plante')).toBe('chip green lighten-1');

    expect(pipe.transform('Insecte')).toBe('chip brown lighten-1');
    expect(pipe.transform('Normal')).toBe('chip grey lighten-3');
    expect(pipe.transform('Vol')).toBe('chip blue lighten-3');

    expect(pipe.transform('Poison')).toBe('chip deep-purple accent-1');
    expect(pipe.transform('Fée')).toBe('chip pink lighten-4');
    expect(pipe.transform('Psy')).toBe('chip deep-purple darken-2');

    expect(pipe.transform('Electrik')).toBe('chip lime accent-1');
    expect(pipe.transform('Combat')).toBe('chip deep-orange');
    expect(pipe.transform('blabla')).toBe('chip grey');
  });

   

});
