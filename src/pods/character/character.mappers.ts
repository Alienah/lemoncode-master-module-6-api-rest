import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  char: apiModel.Character
): viewModel.Character => ({
  ...char,
  id: char.id,
  name: char.name,
  bestSentences: char.bestSentences,
  species: char.species,
  status: char.status,
  gender: char.gender,
  location: {
    locationName: char.location.name,
    locationUrl: char.location.url,
  },
  image: char.image
});

export const mapCharacterFromVmToApi = (char: viewModel.Character): apiModel.Character =>
  (({
    ...char,
    id: char.id,
    name: char.name,
    bestSentences: char.bestSentences,
    species: char.species,
    status: char.status,
    gender: char.gender,
    location: {
      name: char.location.locationName,
      url: char.location.locationUrl,
    },
    image: char.image
  } as unknown) as apiModel.Character);
