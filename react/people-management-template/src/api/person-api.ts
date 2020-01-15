import { IPersonDto } from "./person-dto-type";
import { Person } from "./person-type";
import jsonData from "./people.json";

export const getPeople = (): Person[] => {
  const people = jsonData.map((personDto: IPersonDto) => {
    return new Person(personDto);
  });
  return people;
};
