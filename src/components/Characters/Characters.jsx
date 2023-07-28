import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  // se ha montado el componente
  useEffect(() => {
    getCharacters();
  }, []);

  const character = characters.map((character) => {
    return (
      <div key={character.id}>
        <p>{character.name}</p>
        <img src={character.image} alt="image character" />
      </div>
    );
  });

  return <div>{character}</div>;
};

export default Characters;
