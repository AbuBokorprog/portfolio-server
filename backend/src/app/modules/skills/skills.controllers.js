import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { SkillServices } from "./skills.services.js";

const createSkill = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await SkillServices.createSkill(newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill created successfully!",
    data: data,
  });
});

const retrieveAllSkill = catchAsync(async (req, res) => {
  const data = await SkillServices.retrieveAllSkill();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve all successfully!",
    data,
  });
});

const updateSkill = catchAsync(async () => {});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await SkillServices.deleteSkill(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill deleted successfully!",
    data,
  });
});

export const SkillControllers = {
  createSkill,
  retrieveAllSkill,
  updateSkill,
  deleteSkill,
};