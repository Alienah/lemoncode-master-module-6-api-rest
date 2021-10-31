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

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
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
      <CharacterComponent character={character} onCharacterFormSave={handleSave}/>
    </>
  )
};
