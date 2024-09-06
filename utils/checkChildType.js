export const checkChildType = (object, child) => {
  if (child === 'created_at' || child === 'updated_at') {
    return new Date(object[child]).toLocaleString().split(',')[0];
  } else return object[child];
};
