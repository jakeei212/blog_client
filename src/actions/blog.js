import axios from "axios";
const BASE_URL = process.env.REACT_APP_DEVELOPMENT_API;

//
//POST BLOG
//
export const createBlog = (blog, token) => {
  const request = axios
    .post(`${BASE_URL}/blog`, blog, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//POST ALL BLOGS
//
export const listBlogsWithCategoriesAndTags = (skip, limit) => {
  const data = {
    limit,
    skip,
  };
  const request = axios
    .post(`${BASE_URL}/blogs-categories`, data, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//GET BLOG
//
export const singleBlog = (slug) => {
  const request = axios
    .get(`${BASE_URL}/blog/${slug}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//POST BLOG REALATED
//
export const listRelated = (blog) => {
  const request = axios
    .post(`${BASE_URL}/blogs/related`, blog, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//GET ALL BLOG
//
export const list = () => {
  const request = axios
    .get(`${BASE_URL}/blogs`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//DELETE BLOG
//
export const removeBlog = (slug, token) => {
  const request = axios
    .delete(`${BASE_URL}/blog/${slug}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};

//
//UPDATE BLOG
//
export const updateBlog = (blog, token, slug) => {
  const request = axios
    .put(`${BASE_URL}/blog/${slug}`, blog, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err);
      }
    });
  return request;
};
