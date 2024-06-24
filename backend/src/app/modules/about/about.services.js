import { About } from "./about.model.js";

const createAbout = async (payload) => {
  const data = await About.create(payload);

  return data;
};

const retrieveAllAbout = async () => {
  const data = await About.find();

  return data;
};

const updateAbout = async () => {};

const deleteAbout = async (id) => {
  const data = await About.findByIdAndDelete(id);
  return data;
};

export const aboutServices = {
  createAbout,
  retrieveAllAbout,
  updateAbout,
  deleteAbout,
};
