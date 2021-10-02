import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  char: apiModel.Character
): viewModel.Character => ({
  ...char,
  id: char.id,
  name: char.name,
  species: char.species,
  status: char.status,
  gender: char.gender,
  location: char.location.name,
  image: char.image
});

export const mapCharacterFromVmToApi = (char: viewModel.Character): apiModel.Character =>
  (({
    ...char,
    id: char.id,
    name: char.name,
    species: char.species,
    status: char.status,
    gender: char.gender,
    location: {
      name: char.location
    },
    image: char.image
  } as unknown) as apiModel.Character);
