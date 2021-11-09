import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';
import { BackLink } from 'common/components';
import { switchRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();

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

  return (
    <>
      <BackLink text="Back to character list" link={switchRoutes.characterCollection} />
      <CharacterComponent character={character} />
    </>
  )
};
