import QueryBuilder from "../../builder/QueryBuilder";
import { BlogSearchableFields } from "./blog.constant";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (paylod: TBlog) => {
  const result = await BlogModel.create(paylod);
  return result;
};

const updateBlogIntoDB = async (id: string, paylod: TBlog) => {
  const result = await BlogModel.findByIdAndUpdate(id, paylod, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteBlogIntoDB = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};
const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(BlogModel.find().populate('author'), query)
    .search(BlogSearchableFields)
    .sortBy()
    .sortOrder()
    .filter();
  const result = await blogQuery.modelQuery;
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogIntoDB,
  getAllBlogFromDB,
};
