import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { Category, ProductFormParams } from "src/types/Product";
import { InputText } from "./elements/InputText";
import { useEffect, useState } from "react";
import axios from "axios";

type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: any;
};

function ProductForm({ onSubmit, initialValues }: ProductFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const validate = (values: ProductFormParams) => {
    const { title, image, category, price } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Can nhap title vao";

    if (!image) errors.image = "Can nhap image vao";
    if (!category) errors.category = "Can nhap category vao";
    if (!price) errors.price = "Can nhap price vao";
    return errors;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/categories");
        setCategories(response.data);

      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh mục:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ values }) => {
        return (
          <Stack>
            <Field
              name="title"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Title"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field
              name="image"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Image"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<string>
              name="description"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Description"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<number>
              name="price"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Price"}
                  messageError={meta.touched && meta.error}
                  type="number"
                />
              )}
            />
            <Field<string>
              name="isShow"
              type="checkbox"
              render={({ input, meta }) => {
                return (
                  <FormControlLabel
                    control={<Checkbox {...input} />}
                    label="Show Product"
                  />
                );
              }}
            />
            <Field<string>
              name="category"
              render={({ input, meta }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" {...input} >


                      <MenuItem value="">Select</MenuItem>
                      {categories.map((category, index) => (
                        <MenuItem key={index} value={category._id}>{category.name}</MenuItem>
                      ))}
                    </Select>
                    {meta.touched && meta.error && (
                      <FormHelperText sx={{color: 'red'}} >{meta.error}</FormHelperText>
                    )}

                  </FormControl>
                );
              }}
            />

            <Button type="submit" onClick={() => onSubmit(values)} >
              Submit
            </Button>
          </Stack>
        );
      }}
    />
  );
}

export default ProductForm;
