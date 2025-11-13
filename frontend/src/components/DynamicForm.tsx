"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import { useFormPersistence } from "../hooks/useFormPersistence";
import jsonData from "../data/form.json";

export default function DynamicForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({ mode: "onChange" });

  const { saveForm, loadForm } = useFormPersistence();
  const [formError, setFormError] = useState<string>("");

  // Load saved form data if available
  useEffect(() => {
    const saved = loadForm();
    if (saved) reset(saved);
  }, [loadForm, reset]);

  // Enhanced onSubmit with strict validation
  const onSubmit = (data: any) => {
    // check for empty or missing required fields
    const missingFields = jsonData.data.filter((field) => {
      const value = getValues(field.name);
      return field.required && (!value || value.trim?.() === "");
    });

    if (missingFields.length > 0) {
      setFormError(" Please fill all the fields before submitting.");
      return; // stop submission
    }

    setFormError("");
    saveForm(data);
    alert("Form submitted successfully!");
    console.log("Form Data:", data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f7f9fb"
      px={2}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          borderRadius: 4,
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={3}
          color="primary"
        >
          Dynamic Signup Form
        </Typography>

        {formError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {formError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {jsonData.data.map((field) => (
            <Box key={field.id} mb={3}>
              <Controller
                name={field.name}
                control={control}
                defaultValue={field.defaultValue || ""}
                rules={{
                  required: field.required ? `${field.name} is required` : false,
                  minLength: field.minLength,
                  maxLength: field.maxLength,
                }}
                render={({ field: controllerField }) => {
                  // Text Field
                  if (field.fieldType === "TEXT") {
                    return (
                      <TextField
                        {...controllerField}
                        label={`${field.name} *`}
                        fullWidth
                        error={!!errors[field.name]}
                        helperText={
                          errors[field.name]
                            ? (errors[field.name]?.message as string)
                            : ""
                        }
                      />
                    );
                  }

                  // Dropdown (LIST)
                  if (field.fieldType === "LIST") {
                    return (
                      <TextField
                        {...controllerField}
                        select
                        label={`${field.name} *`}
                        fullWidth
                        error={!!errors[field.name]}
                        helperText={
                          errors[field.name]
                            ? (errors[field.name]?.message as string)
                            : ""
                        }
                      >
                        {field.listOfValues1.map((option: string, index: number) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    );
                  }

                  // Radio Button Group
                  if (field.fieldType === "RADIO") {
                    return (
                      <>
                        <Typography mb={1}>{field.name} *</Typography>
                        <RadioGroup row {...controllerField}>
                          {field.listOfValues1.map((option: string, index: number) => (
                            <FormControlLabel
                              key={index}
                              value={option}
                              control={<Radio />}
                              label={option}
                            />
                          ))}
                        </RadioGroup>
                        {errors[field.name] && (
                          <Typography color="error" variant="caption">
                            {errors[field.name]?.message as string}
                          </Typography>
                        )}
                      </>
                    );
                  }

                  return null;
                }}
              />
            </Box>
          ))}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 1.2,
              fontWeight: "bold",
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
