import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  char: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: char.id,
  image: char.image,
  name: char.name,
  status: char.status,
  species: char.species,
  gender: char.gender,
});
