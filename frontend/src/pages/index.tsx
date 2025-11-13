import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DynamicForm from '../components/DynamicForm';
import schema from '../data/form.json';

export default function Home() {
  return (
    <Container maxWidth="md" style={{ paddingTop: 32 }}>
      <Typography variant="h4" gutterBottom>Dynamic Signup Form</Typography>
      <DynamicForm schema={schema as any} />
    </Container>
  );
}
