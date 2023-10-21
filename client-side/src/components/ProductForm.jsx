import { useForm } from "react-hook-form";
import useProducts from "../hooks/useProducts";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createProduct } = useProducts();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("type", data.type);
    formData.append("color", data.color);
    formData.append("storage", data.storage);
    formData.append("image", data.image[0]);

    try {
      await createProduct(formData);
      reset();
    } catch (error) {
      console.error("Product creation error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          {...register("price")}
          id="price"
          type="number"
          className="form-control"
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          className="form-control"
          rows={5}
          placeholder="Add the description"
        ></textarea>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="form-label">
          Brand
        </label>
        <input
          {...register("brand")}
          id="brand"
          type="text"
          className="form-control"
        />
        {errors.brand && <p className="text-danger">{errors.brand.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <select {...register("type")} id="type" className="form-select">
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
          <option value="laptop">Laptop</option>
          <option value="watch">Watch</option>
        </select>
        {errors.type && <p className="text-danger">{errors.type.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="color" className="form-label">
          Color
        </label>
        <input
          {...register("color")}
          id="color"
          type="text"
          className="form-control"
        />
        {errors.color && <p className="text-danger">{errors.color.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="storage" className="form-label">
          Storage
        </label>
        <input
          {...register("storage")}
          id="storage"
          type="text"
          className="form-control"
        />
        {errors.storage && (
          <p className="text-danger">{errors.storage.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          {...register("image")}
          type="file"
          id="image"
          className="form-input"
        />
        {errors.image && <p className="text-danger">{errors.image.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
