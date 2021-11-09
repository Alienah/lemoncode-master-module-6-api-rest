import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';
import { BackLink } from 'common/components';
import { switchRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = () => {
  const [ character, setCharacter ] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const characterExists = character.name;

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (error) {
      setCharacter(createEmptyCharacter());
      console.log(`Error trying to get character with id ${id}: `, error);
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      handleLoadCharacter();
    } else {
      alert('Error while saving character');
    }
  }

  return (
    <>
      <BackLink text="Back to character list" link={switchRoutes.characterCollection} />
      { characterExists
        ? <CharacterComponent character={character} onCharacterFormSave={handleSave}/>
        : <div>We couldn't find the character 😟. Please try with another one</div>
      }
    </>
  )
};
